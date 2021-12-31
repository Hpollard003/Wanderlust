class PageSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :image, :journal_id
end
