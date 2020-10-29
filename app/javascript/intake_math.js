document.addEventListener('turbolinks:load', function(){
  const tWeight = document.getElementById('target_weight');
  const tSpan = document.getElementById('date');
  const spanButton = document.getElementById('span-button');
  const intensity1 = document.getElementById('intensity-button1');
  const intensity2 = document.getElementById('intensity-button2');
  const intensity3 = document.getElementById('intensity-button3');
  const intensity4 = document.getElementById('intensity-button4');
  const userMetabo = document.getElementById('user-metabo');
  const metabolism = userMetabo.innerText;
  const uWeight = userMetabo.dataset.weight
 
  
  const dateObject = new Date();
  const today = new Date(dateObject.getFullYear()+"/"+(dateObject.getMonth()+1)+"/"+ dateObject.getDate()) 
  let weightNum = 0
  let spanNum = 0
  let intensityNum = 0
  let weight = 0
  tWeight.addEventListener('input', function(){
    weightNum = tWeight.value
    if (weightNum != 0 && spanNum != 0 && intensityNum != 0){
      weight = uweight - weightNum
      console.log(weight);
      spanArray = spanNum.split('-')
      let spanDate = new Date(spanArray[0],spanArray[1]-1,spanArray[2]);
      let span = (spanDate - today) / 86400000
    }
  });

  spanButton.addEventListener('click', function(){
    spanNum = tSpan.value
    console.log(spanNum);
  });

  intensity1.addEventListener('click',function(){
    intensityNum = 1.3
  });

  intensity2.addEventListener('click',function(){
    intensityNum = 1.5
  });

  intensity3.addEventListener('click',function(){
    intensityNum = 1.7
  });

  intensity4.addEventListener('click',function(){
    intensityNum = 1.9
  });


  

  const tIntensity = document.getElementById('intensity-id');




});