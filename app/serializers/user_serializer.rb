class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ImageConcern

  attributes :id, :username, :images_urls

  def images_urls
    object.images.map do |image|
      url_for(image)
    end
  end


end
