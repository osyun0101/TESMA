document.addEventListener('turbolinks:load', function(){
  //共通
  const eatBox = document.getElementById('menu-data');
  const select = document.getElementById('select-food-form');
  const button =document.getElementById('button-none');
  const japan = document.getElementById('japan-meat');
  const overseas = document.getElementById('overseas-meat');


  //牛
  const meat = document.getElementById('meat');
  const from = document.getElementById('meat-from-name');
  const meatBox = document.getElementById('meat-content');

  //豚
  const pig = document.getElementById('pig');
  const pigBox = document.getElementById('pig-content');

  //鳥
  const bird = document.getElementById('bird');
  const birdBox = document.getElementById('bird-content');

  //卵
  const egg = document.getElementById('egg');
  const eggBox = document.getElementById('egg-content');

  //魚
  const fish = document.getElementById('fish');
  const fishBox = document.getElementById('fish-content');

  //貝
  const shellFish = document.getElementById('shellfish');
  const shellFishBox = document.getElementById('shellfish-content');

  //エビ、カニなど
  const seafood = document.getElementById('seafood');
  const seafoodBox = document.getElementById('seafood-content');

  //水産練り物
  const paste = document.getElementById('paste');
  const pasteBox = document.getElementById('paste-content');

  //魚卵
  const fishEgg = document.getElementById('fish-egg');
  const fishEggBox = document.getElementById('fish-egg-content');

  //藻、海藻
  const seaweed = document.getElementById('seaweed');
  const seaweedBox = document.getElementById('seaweed-content');

  //米など
  const rice = document.getElementById('rice');
  const riceBox = document.getElementById('rice-content');

  //野菜など
  const vegetable = document.getElementById('vegetable');
  const vegetableBox = document.getElementById('vegetable-content');

  //麺類など
  const noodle = document.getElementById('noodle');
  const noodleBox = document.getElementById('noodle-content');

  //豆類など
  const bean = document.getElementById('bean');
  const beanBox = document.getElementById('bean-content');

  //種実など
  const nut = document.getElementById('nut');
  const nutBox = document.getElementById('nut-content');

  //いもなど
  const potato = document.getElementById('potato');
  const potatoBox = document.getElementById('potato-content');

  //果物など
  const fruit = document.getElementById('fruit');
  const fruitBox = document.getElementById('fruit-content');

  //きのこなど
  const mushroom = document.getElementById('mushroom');
  const mushroomBox = document.getElementById('mushroom-content');

  //乳製品など
  const milk = document.getElementById('milk');
  const milkBox = document.getElementById('milk-content');

  //油
  const oil = document.getElementById('oil');
  const oilBox = document.getElementById('oil-content');

  //調味料
  const seasoning = document.getElementById('seasoning');
  const seasoningBox = document.getElementById('seasoning-content');


  //牛肉が国産か輸入かを選択した後に他の種類の食材を選択したとき、それぞれに追加されてるdata属性と背景色を初期化
  function meatFrom(){
    japan.style.backgroundColor = "rgba(250,128,128,0.4)";
    overseas.style.backgroundColor = "rgba(250,128,128,0.4)";
    overseas.dataset.number = "";
    japan.dataset.number = "";
  }

  //材料選択のいずれかのボタンをクリックされたときの処理
  function displayChange(data){
    eatBox.style.display="block";
    pigBox.style.display="none";
    select.style.display="block";
    meatBox.style.display="none";
    from.style.display="none";
    button.style.display = "flex";
    birdBox.style.display="none";
    eggBox.style.display="none";
    fishBox.style.display="none";
    shellFishBox.style.display = "none";
    seafoodBox.style.display = "none";
    pasteBox.style.display = "none";
    fishEggBox.style.display ="none";
    seaweedBox.style.display ="none";
    riceBox.style.display = "none";
    vegetableBox.style.display = "none";
    noodleBox.style.display = "none";
    beanBox.style.display = "none";
    nutBox.style.display = "none";
    potatoBox.style.display = "none";
    fruitBox.style.display = "none";
    mushroomBox.style.display = "none";
    milkBox.style.display = "none";
    oilBox.style.display = "none";
    seasoningBox.style.display = "none";

    data.style.display="block";
  }

  //クリックした箇所の背景色を変更
  function backChange(self){
      meat.style.backgroundColor = "orange"
      pig.style.backgroundColor = "orange"
      bird.style.backgroundColor = "orange"
      egg.style.backgroundColor = "orange"
      fish.style.backgroundColor = "orange"
      shellFish.style.backgroundColor = "orange"
      seafood.style.backgroundColor = "orange"
      paste.style.backgroundColor = "orange"
      fishEgg.style.backgroundColor = "orange"
      seaweed.style.backgroundColor = "orange"
      rice.style.backgroundColor = "orange"
      vegetable.style.backgroundColor = "orange"
      noodle.style.backgroundColor = "orange"
      bean.style.backgroundColor = "orange"
      nut.style.backgroundColor = "orange"
      potato.style.backgroundColor = "orange"
      fruit.style.backgroundColor = "orange"
      mushroom.style.backgroundColor = "orange"
      milk.style.backgroundColor = "orange"
      oil.style.backgroundColor = "orange"
      seasoning.style.backgroundColor = "orange"

      self.style.backgroundColor = "#FFC7AF";
  }

  //牛肉をクリックしたとき
  meat.addEventListener('click',function(){
    eatBox.style.display="block";
    from.style.display="block";
    pigBox.style.display="none";
    birdBox.style.display="none";
    eggBox.style.display="none";
    button.style.display = "none";
    fishBox.style.display="none";
    shellFishBox.style.display ="none";
    seafoodBox.style.display = "none";
    pasteBox.style.display = "none";
    fishEggBox.style.display ="none";
    seaweedBox.style.display ="none";
    riceBox.style.display = "none";
    vegetableBox.style.display = "none";
    noodleBox.style.display = "none";
    beanBox.style.display = "none";
    nutBox.style.display = "none";
    potatoBox.style.display = "none";
    fruitBox.style.display = "none";
    mushroomBox.style.display = "none";
    milkBox.style.display = "none";
    oilBox.style.display = "none";
    seasoningBox.style.display = "none";
    
    backChange(meat);
  });

  //豚肉をクリックしたとき
  pig.addEventListener('click', function(){
    displayChange(pigBox);

    meatFrom();

    backChange(pig);
  });

  //鶏肉をクリックしたとき
  bird.addEventListener('click', function(){
    displayChange(birdBox);

    meatFrom();

    backChange(bird);
  });

  //卵をクリックしたとき
  egg.addEventListener('click', function(){
    displayChange(eggBox);

    meatFrom();

    backChange(egg);
  });

  //魚をクリックしたとき
  fish.addEventListener('click', function(){
    displayChange(fishBox);

    meatFrom();

    backChange(fish);
  });

  //貝をクリックしたとき
  shellFish.addEventListener('click', function(){
    displayChange(shellFishBox);

    meatFrom();

    backChange(shellFish);
  });

  //エビ、カニ・・・をクリックしたとき
  seafood.addEventListener('click', function(){
    displayChange(seafoodBox);

    meatFrom();

    backChange(seafood);
  });

  //水産練り物をクリックしたとき
  paste.addEventListener('click', function(){
    displayChange(pasteBox);

    meatFrom();

    backChange(paste);
  });

  //魚卵をクリックしたとき
  fishEgg.addEventListener('click', function(){
    displayChange(fishEggBox);

    meatFrom();

    backChange(fishEgg);
  });

  //藻、海藻をクリックしたとき
  seaweed.addEventListener('click', function(){
    displayChange(seaweedBox);

    meatFrom();

    backChange(seaweed);
  });

  //米などをクリックしたとき
  rice.addEventListener('click', function(){
    displayChange(riceBox);

    meatFrom();

    backChange(rice);
  });

  //野菜をクリックしたとき
  vegetable.addEventListener('click', function(){
    displayChange(vegetableBox);

    meatFrom();

    backChange(vegetable);
  });

  //麺類をクリックしたとき
  noodle.addEventListener('click', function(){
    displayChange(noodleBox);

    meatFrom();

    backChange(noodle);
  });

  //豆類をクリックしたとき
  bean.addEventListener('click', function(){
    displayChange(beanBox);

    meatFrom();

    backChange(bean);
  });

  //種実をクリックしたとき
  nut.addEventListener('click', function(){
    displayChange(nutBox);

    meatFrom();

    backChange(nut);
  });

  //いもをクリックしたとき
  potato.addEventListener('click', function(){
    displayChange(potatoBox);

    meatFrom();

    backChange(potato);
  });

  //果物をクリックしたとき
  fruit.addEventListener('click', function(){
    displayChange(fruitBox);

    meatFrom();

    backChange(fruit);
  });

  //きのこをクリックしたとき
  mushroom.addEventListener('click', function(){
    displayChange(mushroomBox);

    meatFrom();

    backChange(mushroom);
  });

  //乳製品をクリックしたとき
  milk.addEventListener('click', function(){
    displayChange(milkBox);

    meatFrom();

    backChange(milk);
  });

  //油をクリックしたとき
  oil.addEventListener('click', function(){
    displayChange(oilBox);

    meatFrom();

    backChange(oil);
  });

  //調味料をクリックしたとき
  seasoning.addEventListener('click', function(){
    displayChange(seasoningBox);

    meatFrom();

    backChange(seasoning);
  });
});