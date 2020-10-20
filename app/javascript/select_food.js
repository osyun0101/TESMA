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

    data.style.display="block";
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
  });

  //豚肉をクリックしたとき
  pig.addEventListener('click', function(){
    displayChange(pigBox);

    meatFrom();
  });

  //鶏肉をクリックしたとき
  bird.addEventListener('click', function(){
    displayChange(birdBox);

    meatFrom();
  });

  //卵をクリックしたとき
  egg.addEventListener('click', function(){
    displayChange(eggBox);

    meatFrom();
  });

  //魚をクリックしたとき
  fish.addEventListener('click', function(){
    displayChange(fishBox);

    meatFrom();
  });

  //貝をクリックしたとき
  shellFish.addEventListener('click', function(){
    displayChange(shellFishBox);

    meatFrom();
  });

  //エビ、カニ・・・をクリックしたとき
  seafood.addEventListener('click', function(){
    displayChange(seafoodBox);

    meatFrom();
  });

  //水産練り物をクリックしたとき
  paste.addEventListener('click', function(){
    displayChange(pasteBox);

    meatFrom();
  });

  //魚卵をクリックしたとき
  fishEgg.addEventListener('click', function(){
    displayChange(fishEggBox);

    meatFrom();
  });

  //藻、海藻をクリックしたとき
  seaweed.addEventListener('click', function(){
    displayChange(seaweedBox);

    meatFrom();
  });

  //米などをクリックしたとき
  rice.addEventListener('click', function(){
    displayChange(riceBox);

    meatFrom();
  });

  //野菜をクリックしたとき
  vegetable.addEventListener('click', function(){
    displayChange(vegetableBox);

    meatFrom();
  });
});