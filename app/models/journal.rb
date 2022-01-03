class Journal < ApplicationRecord
    belongs_to :user
    has_many :pages

    validates :title, presence: true
end
