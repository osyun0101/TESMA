document.addEventListener('turbolinks:load', function(){
  const meat = document.getElementById('meat');
  const meatBox = document.getElementById('meat-box');

  meat.addEventListener('click',function(){
    meatBox.style.display="block";
  });
});