class Calory < ApplicationRecord
  belongs_to :user
  NUMBER = /\A[0-9]+\z/.freeze
  validates :calory, presence: true, format: {with: NUMBER },numericality: { other_than: 0}
  validates :create_date, presence: true
end
