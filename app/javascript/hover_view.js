document.addEventListener('turbolinks:load', function(){
  const basal = document.getElementById("basal");
  if (basal == null ){
    return null
  }
  const basalNone = document.getElementById('basal-none');
  //基礎代謝量がホバーされたとき
  basal.addEventListener('mouseover', function(){
    basalNone.style.display = "block";
  });
  basal.addEventListener('mouseleave', function(){
    basalNone.style.display = "none";
  });
  //生活強度指数がホバーされたとき
  const lifeNum = document.getElementById("life-num");
  const lifeNumNone = document.getElementById("life-num-none");

  lifeNum.addEventListener('mouseover', function(){
    lifeNumNone.style.display = "block";
  });
  lifeNum.addEventListener('mouseleave', function(){
    lifeNumNone.style.display = "none";
  });

});