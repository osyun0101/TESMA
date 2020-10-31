class Target < ApplicationRecord
  belongs_to :user

  NUMBER_WEIGHT = /\A[0-9]+(\.[0-9]+)?\z/.freeze
  NUMBER_GOSIC = /\A[0-9]+\z/.freeze

  with_options presence: true do
    validates :weight, format:{ with: NUMBER_WEIGHT,message: 'は半角で入力してください。'},numericality: { greater_than: 0, message: 'は0より大きい数値を入力してください' }   
    validates :intensity
    validates :intake,format:{ with: NUMBER_GOSIC }
    validates :date
  end
  #日付が今日より前に設定された時
  validate :date_before_today

  def date_before_today
    if date != nil && date < Date.today 
    errors.add(:date, "は今日以降のものを選択してください") 
    end
  end

  def math_intake
    user = User.find(self.user_id)
    weight = ((user.weight.to_f).rationalize - (self.weight.to_f).rationalize).to_f
    span = ((self.date - Date.today).to_i)+1
    kcal = (weight.rationalize * 7000r /(span.to_f).rationalize).to_f
    combustion = ((user.metabolism.to_f).rationalize * (self.intensity.to_f).rationalize).to_f
    intake = (combustion.rationalize - kcal.rationalize).to_f
    if intake.floor < user.metabolism.to_i
     return 0
    else
      return 1
    end
  end
end
