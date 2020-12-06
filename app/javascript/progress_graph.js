document.addEventListener('turbolinks:load', function(){
    const ctx = document.getElementById("myChart");
    if(ctx == null){
      return null
    }
    const intakeData = document.getElementById('data-intake').dataset.intake;
    const intake = intakeData*1.2
    const select = document.getElementById('data-option');

    const dataDiv = document.getElementById('data-div');
    const dataToday = dataDiv.dataset.today
    const dataCreated = dataDiv.dataset.created
    const dataUpdated = dataDiv.dataset.updated
    const date = new Date(dataToday)
    const array = []
    const fullYearArray = []

    //摂取カロリーのデータ取得
    const kcalString = document.getElementById('intake-kcal').dataset.kcal;
    const kcalData = kcalString.trim().split(',').map(function(i){
      return i.trim().replace(/\s+/g,' ').split(' ');
    });
    
    const dateKcal = kcalData.map(function(d){
       return [new Date(d[0]),d[1]]
    });
    
    //表示する日付の配列作成
    let fullYear = date.getFullYear()
    let count = 0
   
   function ArrayNew(targetDay){
    for(var r = targetDay; r <= date ; r.setDate(r.getDate()+1)) {
      if (fullYear == r.getFullYear()){
      array.push(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate());
      fullYearArray.push(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate());
      fullYear += 1
       count += 1
      }
       else {
           array.push((r.getMonth()+1)+"-"+r.getDate());
           fullYearArray.push(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate());
      }
     }
     
     if(array.length > 90){
       fullYearArray.splice(0,array.length-90)
       array.splice(0,array.length-90)
       
       const minDate = new Date(fullYearArray[0])
       
       for(const dt of dateKcal){
         if (minDate <= dt[0]){
            break
         }
         else {
          copyKcalData.shift()
         }
       }

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

    const matchArray = []   
    //摂取カロリーの配列作成の関数
    function kcalArray(){
       let i = 0
      for(const label of fullYearArray){
        if(i < kcalData.length && label == kcalData[i][0]){
          matchArray.push(kcalData[i][1])
          i += 1
        }
        else {
          matchArray.push(0)
        }
      }
    }
    //摂取カロリーの配列作成の関数

    //目標設定をした日付取得｜｜更新した日付があればそれを取得
      const td = new Date(dataCreated)
      const targetDay = new Date(td.getFullYear()+"-"+(td.getMonth()+1)+"-"+td.getDate())

      ArrayNew(targetDay)
      dataSelect(td)
    //if(dataCreated == dataUpdated){
     // const td = new Date(dataCreated)
      //const targetDay = new Date(td.getFullYear()+"-"+(td.getMonth()+1)+"-"+td.getDate())

    //  ArrayNew(targetDay)
     // dataSelect(td)
   // }
    //else {
      //const td = new Date(dataUpdated)
     // const targetDay = new Date(td.getFullYear()+"-"+(td.getMonth()+1)+"-"+td.getDate())

      //ArrayNew(targetDay)
      //dataSelect(td)
      //}
    //目標設定をした日付取得｜｜更新した日付があればそれを取得

    //摂取カロリーの配列を作成する関数の呼び出し
    kcalArray()
      
    function chartView(){
    // myChartの横幅を動的に変更
    if (window.innerWidth <= 375){
      //表示領域の横幅が375px以下の時のグラフサイズ調整
      const chartWidth = 50
      if(array.length == 1){
        ctx.style.width = chartWidth + "px"
        ctx.style.height = 400+"px"
      } 
      else if(array.length > 1 && count > 1){
        const width = chartWidth+(array.length - 1)*30 + (count*3)
        ctx.style.width = width + "px"
        ctx.style.height = 400+"px"
      }
      else {
        const width = chartWidth+(array.length - 1)*30 + 3
        ctx.style.width = width + "px"
        ctx.style.height = 400+"px"
      } 
    }
    else {
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
          data: matchArray,
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
    if (arrayValue == 0 ){
      if (document.getElementById('addChart') != null){
        document.getElementById('addChart').remove()
      }
      ctx.style.display="block"
    }
    else {
    const dateSum = new Date(arrayValue[0],arrayValue[1],0).getDate()
    const firstDay = new Date(arrayValue[0],arrayValue[1]-1,1)
    const lastDay = new Date(arrayValue[0], arrayValue[1]-1, dateSum)

    const changeArray = []
    const changeArrayYear = []
    let num = 0
    //表示する日付の配列作成
    for(var r = firstDay; r <= lastDay ; r.setDate(r.getDate()+1)) {
      if (num == 0){
        changeArray.push(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate());
        changeArrayYear.push(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate());
       num += 1
      }else {
        changeArray.push((r.getMonth()+1)+"-"+r.getDate());
        changeArrayYear.push(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate());
      }
     }
   
     //その月の日付の摂取カロリーのみの配列作成
     const MonthIntake = []
     const monthData = kcalData
  
     for(const allDay of changeArrayYear){
      let i = 0
       for(const md of monthData){
        if(md[0] == allDay){
          MonthIntake.push(md[1])
          break
        }
        else {
          if(i == monthData.length-1){
            MonthIntake.push(0)  
          }
        }
        i += 1
       }
     }
      
      //その月の日付の摂取カロリーのみの配列作成

     const leng = changeArray.length
     const el = intakeData
     const ar = new Array(leng).fill(el);

     const newCanvas = document.createElement("canvas"); 
     newCanvas.id = "addChart";

     if (window.innerWidth <= 414){
       newCanvas.height=400;
       newCanvas.width=600;
      const adChart = new Chart(newCanvas, {
        type: 'line',
        data: {
        labels: changeArray,
        datasets: [
          {
            data: MonthIntake,
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
     else {
      const adChart = new Chart(newCanvas, {
        type: 'line',
        data: {
        labels: changeArray,
        datasets: [
          {
            data: MonthIntake,
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
  }
  
  const chartBox = document.getElementById('chart-box');
  const alreadyAdd = document.getElementById('addChart');
  if(alreadyAdd != null){
    alreadyAdd.remove()
  }
  ctx.style.display="none";
  chartBox.appendChild(newCanvas);
   } 
   });
  
});