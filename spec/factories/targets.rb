FactoryBot.define do
  factory :target do
    weight {'70'}
    intensity {'1.5'}
    intake {'2000'}
    date {Date.today+1}
    association :user
  end
end
