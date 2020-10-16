class Bird < ActiveHash::Base
  self.data = [
    {id: 30, name: 'もも（皮あり）',calory: 2.04},
    {id: 31, name: 'もも（皮なし）',calory: 1.27},
    {id: 32, name: 'むね（皮あり）',calory: 1.45},
    {id: 33, name: 'むね（皮なし）',calory: 1.16},
    {id: 34, name: 'ささみ',calory: 1.14},
    {id: 35, name: 'レバー',calory: 1.1},
    {id: 36, name: 'ハツ（しん臓）',calory: 2.07},
    {id: 37, name: '軟骨',calory: 0.54},
    {id: 38, name: '砂肝',calory: 0.94},
    {id: 39, name: '皮',calory: 5.13},
    {id: 40, name: '手羽先',calory: 2.26},
  ]
end
