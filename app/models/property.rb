class Property < ApplicationRecord
  validates :date, presence: true
  validates :address, presence: true
  validates :listing_amount, presence: true
  validates :listing_source, presence: true
  validates :offer, presence: true
  validates :zoning, presence: true
  validates :units, presence: true
  validates :bedrooms, presence: true
  validates :year_built, presence: true
  validates :sq_ft, presence: true
  validates :tax, presence: true
  validates :expenses, presence: true
  validates :construction_cost, presence: true
  validates :arv, presence: true
  validates :realtors, presence: true
  validates :invesment_amount, presence: true
  validates :investors, presence: true
  validates :expected_profit, presence: true
  validates :actual_profit, presence: true
  validates :profits_needed, presence: true
  validates :timeline, presence: true

  belongs_to :broker
  has_many :users, through: :broker
end