class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :sex
  has_many :calories
  has_one :target

  NUMBER_GOSIC = /\A[0-9]+\z/.freeze
  NUMBER_WEIGHT = /\A[0-9]+(\.[0-9]+)?\z/.freeze
  with_options presence: true do
    validates :name
    validates :phone_number, format:{ with: NUMBER_GOSIC }, length: { maximum: 11 }
    validates :sex
    validates :age,:stature,:weight, format:{ with: NUMBER_WEIGHT }
    validates :metabolism, format:{ with: NUMBER_GOSIC }
  end
  PASSWORD_REGEX = /\A(?=.*?[a-z])(?=.*?[\d])[a-z\d]+\z/i.freeze
  validates_format_of :password, with: PASSWORD_REGEX, message: 'には英字と数字の両方を含めて設定してください', on: :create

  validates :sex_id, numericality: { other_than: 1, message: 'を選択してください'}

  def intake_save
    weight = (self.weight.to_f.rationalize - self.target.weight.to_f.rationalize).to_f
    date = self.target.date - Date.today
    kcal = weight.rationalize*7000r/(date+1)
    combustion = self.metabolism.to_f.rationalize * self.target.intensity.to_f.rationalize
    intake = ((combustion - kcal).to_f).floor
    return intake
  end
end
