class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :friend, :confirmed
  has_one :user
end
