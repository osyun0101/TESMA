document.addEventListener('turbolinks:load', function(){
  const meat = document.getElementById('meat');
  const eatBox = document.getElementById('eat-food-box');

  meat.addEventListener('click',function(){
    eatBox.style.display="block";
  });
});