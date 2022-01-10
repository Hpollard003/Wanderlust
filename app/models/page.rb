class Page < ApplicationRecord
    belongs_to :journal

    validates :title, presence: true, length: { maximum: 20}
    validates :body, presence: true, length: { maximum: 200}
    
end
