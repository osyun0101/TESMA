require 'rails_helper'

RSpec.describe Calory, type: :model do
  describe 'カロリーデータ登録' do
    before do
      @calory = FactoryBot.build(:calory)
    end

    it '全ての値が存在すれば保存できる' do
      expect(@calory).to be_valid
    end

    it '紐づくユーザーがない時、保存できない' do
      @calory.user = nil
      @calory.valid?
      expect(@calory.errors.full_messages).to include("Userを入力してください")
    end

    it 'caloryが空の時、保存できない' do
      @calory.calory = nil
      @calory.valid?
      expect(@calory.errors.full_messages).to include("カロリーを入力してください", "カロリーは不正な値です", "カロリーは数値で入力してください")
    end

    it 'caloryが0の時、保存できない' do
      @calory.calory = 0
      @calory.valid?
      expect(@calory.errors.full_messages).to include("カロリーは0以外の値にしてください")
    end

    it 'caloryが半角数字出ない時、保存できない' do
      @calory.calory = '１２３４'
      @calory.valid?
      expect(@calory.errors.full_messages).to include("カロリーは数値で入力してください")
    end

    it 'create_dateが存在しない時、保存できない' do
      @calory.create_date = nil
      @calory.valid?
      expect(@calory.errors.full_messages).to include("Create dateを入力してください")
    end
  end
end
