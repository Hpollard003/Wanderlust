class User < ApplicationRecord
    # Has secure password adds a method to set and authenicate against a bcrypt(Blowfish Crypt) password it requires a password_digest
    has_secure_password

    # This macro is used validates a username and password when interacting with the user routes
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :password_confirmation, presence: true

    has_many :journals
    has_one_attached :avatar 
    
end
