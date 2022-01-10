class Invitation < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: "User", foreign_key: "friend_id"

  # this validation is necessary for unique friendship records and preventing duplicates
  validates_uniqueness_of :friend, scope: [:user_id, :friend_id]
end
