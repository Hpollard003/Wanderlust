class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ImageConcern

  attributes :id, :username, :friends, :pending_friends, :journals, :images_urls, :invitations

  def images_urls
    object.images.map do |image|
      url_for(image)
    end
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
