class Subcontractor < ApplicationRecord
  validates :type, presence: true
  validates :name, presence: true
  validates :number, presence: true
  validates :street, presence: true
  validates :state, presence: true
  validates :zipcode, presence: true
  validates :country, presence: true

  belongs_to :stage
end