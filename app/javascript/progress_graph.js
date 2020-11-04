document.addEventListener('turbolinks:load', function(){
    const intakeData = document.getElementById('data-intake').dataset.intake;
    const intake = intakeData*1.2
    const ctx = document.getElementById("myChart");
    const select = document.getElementById('data-option');

    const dataDiv = document.getElementById('data-div');
    const dataToday = dataDiv.dataset.today
    const dataCreated = dataDiv.dataset.created
    const dataUpdated = dataDiv.dataset.updated
    const date = new Date(dataToday)
    const array = []
 

    let fullYear = date.getFullYear()
    let count = 0
   //表示する日付の配列作成
   function ArrayNew(targetDay){
    for(var r = targetDay; r <= date ; r.setDate(r.getDate()+1)) {
      if (fullYear == r.getFullYear()){
      array.push(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate());
      fullYear += 1
       count += 1
      }
       else {
           array.push((r.getMonth()+1)+"-"+r.getDate());
      }
     }

     if(array.length > 90){
       array.splice(0,array.length-90)
     }
    }
    //表示する日付の配列作成

    //select要素に月ごとのデータを選択できるようにoption追加
    function dataSelect(td){
      const yaerWhile = date.getFullYear()-td.getFullYear()
      const MonthWhile = (date.getMonth()+1)-(td.getMonth()+1)
      let year = date.getFullYear()
      let month = date.getMonth()+1
 
      if (yaerWhile == 0){
        for(let i = 0; i <= MonthWhile; i++ ){
          select.insertAdjacentHTML('beforeend',`<option value=${year},${month}>${month}月</option>`)
          month -= 1
        }
      }
      else {
        if(MonthWhile == 0){
          for(let i = 0; i < 13-(td.getMonth()+1)+(date.getMonth()+1)+(yaerWhile-1)*12; i++){
            select.insertAdjacentHTML('beforeend',`<option value=${year},${month}>${year}年${month}月</option>`)
            month -= 1
            if (month == 0){
              month = 12
              year -= 1
            }
          }
        }
        else{
          for( i = 0; i < 13+MonthWhile+(yaerWhile-1)*12; i++) {
            select.insertAdjacentHTML('beforeend',`<option value=${year},${month}>${year}年${month}月</option>`)
            month -= 1
            if (month == 0){
              month = 12
              year -= 1
            }
          }
        }
      }
    }
    //select要素に月ごとのデータを選択できるようにoption追加

    //目標設定をした日付取得｜｜更新した日付があればそれを取得
    if(dataCreated == dataUpdated){
      const td = new Date(dataCreated)
      const targetDay = new Date(td.getFullYear()+"-"+(td.getMonth()+1)+"-"+td.getDate())

      ArrayNew(targetDay)
      dataSelect(td)
    }
    else {
      //const td = new Date(dataUpdated)
      const td = new Date(2020, 9, 4)
      const targetDay = new Date(td.getFullYear()+"-"+(td.getMonth()+1)+"-"+td.getDate())

      ArrayNew(targetDay)
      dataSelect(td)
      }
    //目標設定をした日付取得｜｜更新した日付があればそれを取得

    function chartView(){
    // myChartの横幅を動的に変更
    const chartWidth = 125
      if(array.length == 1){
        ctx.style.width = chartWidth + "px"
        ctx.style.height = 600+"px"
      } 
      else if(array.length > 1 && count > 1){
        const width = chartWidth+(array.length - 1)*86 + (count*3)
        ctx.style.width = width + "px"
        ctx.style.height = 600+"px"
      }
      else {
        const width = chartWidth+(array.length - 1)*86 + 3
        ctx.style.width = width + "px"
        ctx.style.height = 600+"px"
      } 
    
    // myChartの横幅を動的に変更
    

    const len = array.length
    const el = intakeData
    const ary = new Array(len).fill(el);

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
      labels: array,
      datasets: [
        {
          data: [],
          borderColor: "rgba(255,0,0,1)",
          backgroundColor: "rgba(0,0,0,0)",
          lineTension:0,
        },
        {
          data: ary,
          borderColor: "rgba(0,0,255,1)",
          backgroundColor: "rgba(0,0,0,0)",
          lineTension:0,
          pointRadius: 5,
        }
      ],
    },
    options: {
      responsive: false,
      animation: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false,
            suggestedMax: intake,
            suggestedMin: 0,
            stepSize: 200,
            minRotation: 0,
            maxRotation: 0,
            callback: function(value, index, values){
              return  value +  'kcal'
            }
          }
        }]
      },
    }
  });

  }
  chartView()



  select.addEventListener('change', function(e){
    const arrayValue= e.target.value.split(',').map(Number);
    const dateSum = new Date(arrayValue[0],arrayValue[1],0).getDate()
    const firstDay = new Date(arrayValue[0],arrayValue[1]-1,1)
    const lastDay = new Date(arrayValue[0], arrayValue[1]-1, dateSum)
     
    const changeArray = []
    let num = 0
    //表示する日付の配列作成
    for(var r = firstDay; r <= lastDay ; r.setDate(r.getDate()+1)) {
      if (num == 0){
        changeArray.push(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate());
       num += 1
      }else {
        changeArray.push((r.getMonth()+1)+"-"+r.getDate());
      }
     }
     
     const leng = changeArray.length
     const el = intakeData
     const ar = new Array(leng).fill(el);

     const newCanvas = document.createElement("canvas"); 
     newCanvas.id = "addChart";


     const adChart = new Chart(newCanvas, {
      type: 'line',
      data: {
      labels: changeArray,
      datasets: [
        {
          data: [],
          borderColor: "rgba(255,0,0,1)",
          backgroundColor: "rgba(0,0,0,0)",
          lineTension:0,
        },
        {
          data: ar,
          borderColor: "rgba(0,0,255,1)",
          backgroundColor: "rgba(0,0,0,0)",
          lineTension:0,
          pointRadius: 5,
        }
      ],
    },
    options: {
      responsive: true,
      animation: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false,
            suggestedMax: intake,
            suggestedMin: 0,
            stepSize: 200,
            minRotation: 0,
            maxRotation: 0,
            callback: function(value, index, values){
              return  value +  'kcal'
            }
          }
        }]
      },
    }
  });
  
  const chartBox = document.getElementById('chart-box');
  const alreadyAdd = document.getElementById('addChart');
  if(alreadyAdd != null){
    alreadyAdd.remove()
  }
  ctx.style.display="none";
  chartBox.appendChild(newCanvas);
     
   });
  
});