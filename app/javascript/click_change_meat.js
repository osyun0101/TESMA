document.addEventListener('turbolinks:load', function(){
  const japan = document.getElementById('japan-meat');
  if (japan == null){
    return null
  }
  const overseas = document.getElementById('overseas-meat');

  japan.addEventListener('click', function(){
    const rgbaOver = document.defaultView.getComputedStyle(overseas, null).backgroundColor;
      if (rgbaOver == "rgb(250, 128, 128)"){
          overseas.style.backgroundColor="rgba(250,128,128,0.4)";
          overseas.dataset.number = 2
          japan.removeAttribute('data-number');
      }
      japan.style.backgroundColor="rgba(250,128,128,1)"
      japan.dataset.number = 1
      overseas.removeAttribute('data-number');
  });

  overseas.addEventListener('click', function(){
    const rgbaJapan = document.defaultView.getComputedStyle(japan, null).backgroundColor;
    if (rgbaJapan == "rgb(250, 128, 128)"){
      japan.style.backgroundColor="rgba(250,128,128,0.4)";
      japan.dataset.number = 1
      overseas.removeAttribute('data-number');
  }
      overseas.style.backgroundColor="rgba(250,128,128,1)"
      overseas.dataset.number = 2
      japan.removeAttribute('data-number');
  });
});