class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ImageConcern

  attributes :id, :username, :friends, :pending_friends, :journals, :image

  def image
    rails_blob_url(object.image, only_path: true) if object.image.attached?
  end

  def friends
    object.invitations.where(confirmed: true).map do |invite|
      invite.friend.invite_id = invite.id
      ::FriendSerializer.new(invite.friend)
    end
  end

  def pending_friends
    object.invitations.where(confirmed: false).map do |invite|
    invite.friend.invite_id = invite.id
    @friend = ::FriendSerializer.new(invite.friend)

    end
  end 


end
