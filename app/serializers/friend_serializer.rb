class FriendSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ImageConcern

  attributes :id , :username, :image, :journals, :invite_id

  def image
    rails_blob_url(object.image, only_path: true) if object.image.attached?
  end


end
