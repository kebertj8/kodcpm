class Stage < ApplicationRecord 
  validates :budget, presence: true
  validates :type, presence: true
  validates :materials, presence: true

  belongs_to :site
  has_many :subcontractors
end