document.addEventListener('turbolinks:load', function(){
    const submit = document.getElementById("meat-submit");
    let count = 0
    submit.addEventListener('click', function(e){

      const data = new FormData(document.getElementById('menu-data'));
     
      //for -ofについて for(変数 of 配列){} 指定した配列を変数に一つずつ格納していく
     
     for(const value of data.entries()){
        if (value[1] != ""){
          const num = document.getElementById('japan-meat').dataset.number;
          const num2 = document.getElementById('overseas-meat').dataset.number;
          const id =document.getElementById(`kcal${value[0]}`).dataset.id;
                    
          if (num == 1){
            const menuField = document.getElementById(`kcalmenu${id}`);
            const caloryNum = menuField.dataset.calory
            const calory = value[1] * caloryNum
              count += calory
              //下記は選択された食品名を選択食材に表示するための処理
              const name = document.getElementById(`menu-name-${id}`).innerText;
              const addText = document.getElementById('add-text');
              addText.insertAdjacentHTML('afterbegin', `<li>${name}</li><li>${value[1]}g/${calory}kcal</li>`)
            
          }
          if (num2 == 2){
            const menuField = document.getElementById(`kcalmenu${id}`)
            const caloryNum = menuField.dataset.calory2
              const calory = value[1] * caloryNum
                count += calory
              //下記は選択された食品名を選択食材に表示するための処理
              const name = document.getElementById(`menu-name-${id}`).innerText;
              const addText = document.getElementById('add-text');
              addText.insertAdjacentHTML('afterbegin', `<li>${name}</li><li>${value[1]}g/${calory}kcal</li>`)
          }
        } 
     }
     const mathAll = document.getElementById('math-all');
     mathAll.value= Math.ceil(count);

     e.preventDefault();
    });
});