FactoryBot.define do
  factory :target do
    weight {'70'}
    intensity {'1.5'}
    intake {'2000'}
    date {2020-11-28}
    association :user
  end
end
