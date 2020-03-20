class User < ApplicationRecord

    has_many :brokers
    has_many :properties, through: :brokers
    has_many :sites
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable
end
