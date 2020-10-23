class Calory < ApplicationRecord
  belongs_to :user
  NUMBER = /\A[0-9]+\z/.freeze
  validates :calory, presence: true, format: {with: NUMBER }
  
end
