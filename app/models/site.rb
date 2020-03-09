class Site < ApplicationRecord
  validates :street, presence: true
  validates :state, presence: true
  validates :country, presence: true
  validates :zipcode, presence: true
  validates :type, presence: true

  belongs_to :user
  has_many :stages
end