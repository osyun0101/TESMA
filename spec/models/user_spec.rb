require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'ユーザー新規登録' do
    before do
      @user = FactoryBot.build(:user)
    end

    it '全てのカラムに値が存在していれば登録できる' do
      expect(@user).to be_valid
    end
    it 'nameが空の時、登録できない'do
      @user.name = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("名前を入力してください")
    end

    it 'emailが空の時、登録できない' do
      @user.email = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("Eメールを入力してください")
    end

    it 'emailに＠が含まれていない時、登録できない' do
      @user.email = 'syunsuke0101gmail.com'
      @user.valid?
      expect(@user.errors.full_messages).to include("Eメールは不正な値です")
    end

    it 'emailが重複していた時、登録できない' do
      @user.save
      another_user = FactoryBot.build(:user)
      another_user.valid?
      expect(another_user.errors.full_messages).to include("Eメールはすでに存在します")
    end

    it 'passwordが空の時、登録できない' do
      @user.password = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("パスワードを入力してください", "パスワードには英字と数字の両方を含めて設定してください")
    end

    it 'passwordが５文字以下の時登録できない' do
      @user.password = '123ab'
      @user.valid?
      expect(@user.errors.full_messages).to include("パスワードは6文字以上で入力してください")
    end

    it 'passwordが英数字混合出ない時、登録できない' do
      @user.password = '123456'
      @user.valid?
      expect(@user.errors.full_messages).to include("パスワードには英字と数字の両方を含めて設定してください")
    end

    it 'passwordが存在していても、password_confirmationが空では登録できない' do
      @user.password_confirmation = ""
      @user.valid?
      expect(@user.errors.full_messages).to include("パスワード（確認用）とパスワードの入力が一致しません")
    end

    it 'phone_numberが空の時、登録できない' do
      @user.phone_number = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("電話番号を入力してください", "電話番号は不正な値です")
    end

    it 'phone_numberが12字以上の時、登録できない' do
      @user.phone_number = '090123456789'
      @user.valid?
      expect(@user.errors.full_messages).to include("電話番号は11文字以内で入力してください")
    end

    it 'phone_numberが半角数字出ない時、登録できない' do
      @user.phone_number = '０９０１２３４５６７８'
      @user.valid?
      expect(@user.errors.full_messages).to include("電話番号は不正な値です")
    end

    it 'ageが空の時、登録できない' do 
      @user.age = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("年齢を入力してください", "年齢は不正な値です")
    end

    it 'ageが半角数字でない時、登録できない' do
      @user.age = '２３'
      @user.valid?
      expect(@user.errors.full_messages).to include("年齢は不正な値です")
    end

    it 'statureが空の時、登録できない' do
      @user.stature = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("身長を入力してください", "身長は不正な値です")
    end

    it 'statureが半角数字出ない時、登録できない' do
      @user.stature = '１７４'
      @user.valid?
      expect(@user.errors.full_messages).to include("身長は不正な値です")
    end

    it 'weightが空の時、登録できない' do
      @user.weight = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("体重を入力してください", "体重は不正な値です")
    end

    it 'weightが半角数字出ない時、登録できない' do
      @user.weight = '７４'
      @user.valid?
      expect(@user.errors.full_messages).to include("体重は不正な値です")
    end

    it 'sex_idが存在しない時、登録できない' do
      @user.sex_id = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("性別を入力してください", "性別を選択してください")
    end

    it 'sex_idが1の時、登録できない' do
      @user.sex_id = 1
      @user.valid?
      expect(@user.errors.full_messages).to include("性別を選択してください")
    end

    it 'metabolismが存在しない時、登録できない'do
      @user.metabolism = nil
      @user.valid?
      expect(@user.errors.full_messages).to include("基礎代謝量を入力してください", "基礎代謝量は不正な値です")
    end

    it 'metabolismが半角数字ではない時、登録できない' do
      @user.metabolism = '２０００'
      @user.valid?
      expect(@user.errors.full_messages).to include("基礎代謝量は不正な値です")
    end
  end
end
