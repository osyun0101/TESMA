class Egg < ActiveHash::Base
  self.data = [
    {id: 41, name: '卵（生）',calory: 96},
    {id: 42, name: '卵（黄身）',calory: 66},
    {id: 43, name: '卵（卵白）',calory: 30},
    {id: 44, name: 'ゆで卵',calory: 80},
    {id: 45, name: 'うずらの卵',calory: 23},
  ]
end
