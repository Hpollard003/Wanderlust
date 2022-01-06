class User < ApplicationRecord
    # Has secure password adds a method to set and authenicate against a bcrypt(Blowfish Crypt) password it requires a password_digest
    has_secure_password

    # This macro is used validates a username and password when interacting with the user routes
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :password_confirmation, presence: true

    has_many :journals
    
    has_many :invitations
    has_many :pending_invitations, -> { where confirmed: false }, class_name: 'Invitation', foreign_key: "friend_id"
  
    def friends
      friends_i_sent_invitation = Invitation.where(user_id: id, confirmed: true).pluck(:friend_id)
      friends_i_got_invitation = Invitation.where(friend_id: id, confirmed: true).pluck(:user_id)
      ids = friends_i_sent_invitation + friends_i_got_invitation
      User.where(id: ids)
    end
  
    def friend_with?(user)
      Invitation.confirmed_record?(id, user.id)
    end
  
    def send_invitation(user)
      invitations.create(friend_id: user.id)
    end


    has_many_attached :images
    # validate :acceptable_images

    # def acceptable_images
    #     return unless images.attached?
      
    #     unless images.byte_size <= 1.gigabyte
    #       errors.add(:images, "is too big")
    #     end
      
    #     acceptable_types = ["image/jpeg", "image/png"]
    #     unless acceptable_types.include?(images.content_type)
    #       errors.add(:images, "must be a JPEG or PNG")
    #     end
    #   end
    
end
