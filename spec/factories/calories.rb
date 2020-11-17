FactoryBot.define do
  factory :calory do
    calory {'2000'}
    create_date {'2020-11-4'}
    association :user
  end
end
