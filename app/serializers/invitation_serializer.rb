class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :friend_id, :confirmed
  has_one :user
end
