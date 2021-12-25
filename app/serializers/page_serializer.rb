class PageSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :image, :journel_id
end
