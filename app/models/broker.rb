class Broker < ApplicationRecord
  belongs_to :users
  belongs_to :property
end