class Journal < ApplicationRecord
    belongs_to :user
    has_many :pages, dependent: :destroy

    validates :title, presence: true, length: { maximum: 30 }
end
