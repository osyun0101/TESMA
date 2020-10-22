document.addEventListener('turbolinks:load', function(){
    const submit = document.getElementById("meat-submit");
    if (submit == null ){
      return null
    }
    let count = 0
    const mathAll = document.getElementById('math-all');
    const addText = document.getElementById('add-text'); //選択食材のul要素


    //addTextに追加した要素にクリックイベントをもったli要素を追加する関数
    function append(calory){
      const addLi = document.getElementById('add-li')
      const li = document.createElement("li");
      li.innerText="削除";
      li.setAttribute('id', 'point-remove');
      li.setAttribute('class', 'delete-this');
      li.onclick = function(){
        li.parentNode.parentNode.remove();
        count -= calory
        mathAll.value= Math.ceil(count);
      }
      addLi.appendChild(li);
    }

    //OKボタンをクリックした後、入力された値を初期化
    function valueNone(id){
      const textField = document.getElementById(`menu${id}`);
      textField.value='';
    }

    submit.addEventListener('click', function(e){

      const data = new FormData(document.getElementById('menu-data'));
     
      //for -ofについて for(変数 of 配列){} 指定した配列を変数に一つずつ格納していく
     
     for(const value of data.entries()){
      const id =document.getElementById(`kcal${value[0]}`).dataset.id;
        if (value[1] != "" && value[1] >= 1){
          const num = document.getElementById('overseas-meat').dataset.number;
                    
          if (num != 2){
            const menuField = document.getElementById(`kcalmenu${id}`);
            const caloryNum = menuField.dataset.calory
            let calory = Math.round(value[1] * caloryNum);
            if (calory == 0){
              calory = 1
            }
              count += calory
              //下記は選択された食品名を選択食材に表示するための処理
              const name = document.getElementById(`menu-name-${id}`).innerText;
              addText.insertAdjacentHTML('afterbegin', `<div id=select${id}><li>${name}</li><div class="value-delete" id="add-li"><li>${value[1]}g/${calory}kcal</li></div></div>`)
            
              //addTextに追加した要素にクリックイベントをもったli要素を追加
              append(calory);
          }
          else {
            const menuField = document.getElementById(`kcalmenu${id}`)
            const caloryNum = menuField.dataset.calory2
            let calory = Math.round(value[1] * caloryNum);
            if (calory == 0){
              calory = 1
            }
                count += calory
              //下記は選択された食品名を選択食材に表示するための処理
              const name = document.getElementById(`menu-name-${id}`).innerText;
              addText.insertAdjacentHTML('afterbegin', `<div id=select${id}><li>${name}</li><div class="value-delete" id="add-li"><li>${value[1]}g/${calory}kcal</li></div></div>`)

             append(calory);
          }
        } 
        valueNone(id);
     }
     
     mathAll.value= Math.ceil(count);
    
    //-------------------------------------------
    
     e.preventDefault();
    });

    //リセットボタンがクリックされたとき
    const reset = document.getElementById('reset-button');
    reset.addEventListener('click', function(e){
      count = 0
      mathAll.value= count;
      addText.innerHTML='';
      e.preventDefault();
    });  
});
