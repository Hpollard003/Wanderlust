class Page < ApplicationRecord
    belongs_to :journal

    validates :title, presence: true, length: { maximum: 50}
    validates :body, presence: true, length: { maximum: 250}
    
end
