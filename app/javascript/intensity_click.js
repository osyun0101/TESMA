document.addEventListener('turbolinks:load', function(){
  const button1 = document.getElementById('intensity-button1');
  if (button1 == null){
    return null
  }
  const button2 = document.getElementById('intensity-button2');
  const button3 = document.getElementById('intensity-button3');
  const button4 = document.getElementById('intensity-button4');

  if (document.getElementById('target-intensity-data') != null){
    const saveIntensity = document.getElementById('target-intensity-data').dataset.intensity;
    if (saveIntensity == 1.3){
      button1.style.backgroundColor="#666666";
    }
    if (saveIntensity == 1.5){
      button2.style.backgroundColor="#666666";
    }
    if (saveIntensity == 1.7){
      button3.style.backgroundColor="#666666";
    }
    if (saveIntensity == 1.9){
      button4.style.backgroundColor="#666666";
    }
    button1.insertAdjacentHTML('afterbegin', `<input type="hidden" id="intensity-id" name="intensity" value=${saveIntensity}>`)
  }


  function changeColor(button){
    button1.style.backgroundColor="white";
    button2.style.backgroundColor="white";
    button3.style.backgroundColor="white";
    button4.style.backgroundColor="white";

    button.style.backgroundColor="#666666";
  }

  function ifRemove(id){
    if( id != null){
      id.remove();
     }
  }

  button1.addEventListener('click', function(){
   changeColor(button1);
   
   const id = document.getElementById('intensity-id');
   ifRemove(id);
   button1.insertAdjacentHTML('afterbegin', '<input type="hidden" id="intensity-id" name="intensity" value="1.3">')
  });

  button2.addEventListener('click', function(){
    changeColor(button2);

    const id = document.getElementById('intensity-id');
    ifRemove(id);
    button2.insertAdjacentHTML('afterbegin', '<input type="hidden" id="intensity-id" name="intensity" value="1.5">')
  });

  button3.addEventListener('click', function(){
    changeColor(button3);

    const id = document.getElementById('intensity-id');
    ifRemove(id);
    button3.insertAdjacentHTML('afterbegin', '<input type="hidden" id="intensity-id" name="intensity" value="1.7">')
  });

  button4.addEventListener('click', function(){
    changeColor(button4);

    const id = document.getElementById('intensity-id');
    ifRemove(id);
    button4.insertAdjacentHTML('afterbegin', '<input type="hidden" id="intensity-id" name="intensity" value="1.9">')
  });
});