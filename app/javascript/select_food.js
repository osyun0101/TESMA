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


  meat.addEventListener('click',function(){
    eatBox.style.display="block";
    from.style.display="block";
    pigBox.style.display="none";
    button.style.display = "none";
  });

  pig.addEventListener('click', function(){
    eatBox.style.display="block";
    pigBox.style.display="block";
    select.style.display="block";
    meatBox.style.display="none";
    from.style.display="none";
    button.style.display = "flex";

    japan.style.backgroundColor = "rgba(250,128,128,0.4)";
    overseas.style.backgroundColor = "rgba(250,128,128,0.4)";
    overseas.dataset.number = "";
    japan.dataset.number = "";
  });
});