require 'rails_helper'

RSpec.describe Target, type: :model do
  describe '目標設定' do
    before do
      @target = FactoryBot.build(:target)
    end

    it '全ての値が存在すれば保存できる' do
      expect(@target).to be_valid
    end

    it '紐づくユーザーがない時、保存できない' do
      @target.user = nil
      @target.valid?
      expect(@target.errors.full_messages).to include("Userを入力してください")
    end

    it 'weightが空の時、保存できない' do
      @target.weight = nil
      @target.valid?
      expect(@target.errors.full_messages).to include("体重を入力してください", "体重は半角で入力してください。", "体重は0より大きい数値を入力してください")
    end

    it 'weightが半角数字でない時、保存できない' do
      @target.weight = '７４'
      @target.valid?
      expect(@target.errors.full_messages).to include("体重は半角で入力してください。", "体重は0より大きい数値を入力してください")
    end

    it 'weightが0の時、保存できない' do
      @target.weight = 0
      @target.valid?
      expect(@target.errors.full_messages).to include("体重は0より大きい数値を入力してください")
    end

    it 'intensityが空の時、保存できない' do
      @target.intensity = nil
      @target.valid?
      expect(@target.errors.full_messages).to include("生活強度指数を入力してください")
    end

    it 'intakeが空の時、保存できない' do
      @target.intake = nil
      @target.valid?
      expect(@target.errors.full_messages).to include("摂取カロリーを入力してください", "摂取カロリーは不正な値です")
    end

    it 'intakeが半角数字ではない時、保存できない' do
      @target.intake = '１.５'
      @target.valid?
      expect(@target.errors.full_messages).to include("摂取カロリーは不正な値です")
    end

    it 'dateが空の時、保存できない' do
      @target.date = nil
      @target.valid?
      expect(@target.errors.full_messages).to include("目標期間を入力してください")
    end

    it 'dateが今日より前の時、保存できない' do
      @target.date = Date.today-1
      @target.valid?
      expect(@target.errors.full_messages).to include("目標期間は今日以降のものを選択してください")
    end
  end
end
