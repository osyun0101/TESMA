class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  with_options presence: true do
    validates :name
    validates :first_name
    validates :first_name_kana
    validates :last_name
    validates :last_name_kana
    validates :phone_number
    validates :birth_date
  end
end
