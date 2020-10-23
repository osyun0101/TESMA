class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :calories
  NUMBER_GOSIC = /\A[0-9０−９]+\z/.freeze
  with_options presence: true do
    validates :name
    validates :phone_number, format:{ with: NUMBER_GOSIC }, length: { maximum: 11 }
    validates :birth_date
  end
  PASSWORD_REGEX = /\A(?=.*?[a-z])(?=.*?[\d])[a-z\d]+\z/i.freeze
  validates_format_of :password, with: PASSWORD_REGEX, message: 'には英字と数字の両方を含めて設定してください'
end
