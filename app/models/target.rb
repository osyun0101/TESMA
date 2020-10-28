class Target < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :weight
    validates :intensity
    validates :intake
    validates :date
  end
  #日付が今日より前に設定された時
  validate :date_before_today

  def date_before_today
    errors.add(:date, "は今日以降のものを選択してください") if date < Date.today 
  end

  def math_intake
    user = User.find(self.user_id)
    weight = ((user.weight.to_f).rationalize - (self.weight.to_f).rationalize).to_f
    span = (self.date - Date.today).to_i
    kcal = (weight.rationalize * 7000r /(span.to_f).rationalize).to_f
    combustion = ((user.metabolism.to_f).rationalize * (self.intensity.to_f).rationalize).to_f
    intake = (combustion.rationalize - kcal.rationalize).to_f
    if intake < combustion
     return "i"
    end
    return intake.floor
  end
end
