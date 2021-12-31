class JournalSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :pages
end
