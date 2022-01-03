class Page < ApplicationRecord
    belongs_to :journal

    validates :title, presence: true
    validates :body, presence: true
    
end
