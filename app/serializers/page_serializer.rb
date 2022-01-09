class PageSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :journal_id
end
