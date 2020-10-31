document.addEventListener('turbolinks:load', function(){  
  /** 
  * eval-calculation.js
  * evaluate calculation formula.
  *
  * @version 0.9.1
  * @author think49
  * @url https://gist.github.com/think49/54b074cab2145efddb48765652c74710
  * @license http://www.opensource.org/licenses/mit-license.php (The MIT License)
  */

 var evalCalculation = (function (String, pow, max) {
   'use strict';

   function getDecimalPartLength (numberString) {
     var result = /\.\d+$/.exec(numberString);

     return result ? result[0].length - 1 : 0;
   }

   function calcDyadicOperator (matched, number1, operator, number2) {
     var decimalPart = /\.\d+$/, powerNumber1, powerNumber2, result;

     switch (operator) {
       case '+':
         powerNumber1 = pow(10, max(getDecimalPartLength(number1), getDecimalPartLength(number2)));
         result = (powerNumber1 * number1 + powerNumber1 * number2) / powerNumber1;
       break;
     case '-':
         powerNumber1 = pow(10, max(getDecimalPartLength(number1), getDecimalPartLength(number2)));
         result = (powerNumber1 * number1 - powerNumber1 * number2) / powerNumber1;
       break;
     case '*':
         powerNumber1 = pow(10, getDecimalPartLength(number1));
         powerNumber2 = pow(10, getDecimalPartLength(number2));
         result = (number1 * powerNumber1) * (number2 * powerNumber2) / (powerNumber1 * powerNumber2);
       break;
     case '/':
         powerNumber1 = pow(10, max(getDecimalPartLength(number1), getDecimalPartLength(number2)));
         result = (number1 * powerNumber1) / (number2 * powerNumber1);
       break;
     default:
       console.warn('expression: ' + number1 + operator + number2);
       throw new Error(operator + ' is not a operator');
     }

     // console.log(String(number1) + operator + number2 + '=' + result);
     return result;
   }

   return function evalCalculation (expression) {
     var multiplyOrDivide = /(-?(?:\d+(?:\.\d+)?|\.\d+))([*/])(-?(?:\d+(?:\.\d+)?|\.\d+))/g,
         addOrSubtract = /(-?(?:\d+(?:\.\d+)?|\.\d+))([+-])(-?(?:\d+(?:\.\d+)?|\.\d+))/g,
         illegalString;

     expression = String(expression).replace(/\s+/g, '');

     if (illegalString = /^[+-]?(?:\.[^\d]|[^\d.+-])/.exec(expression)) {
       throw new SyntaxError('An expression starts with an unexpected token: ' + illegalString[0]);
     }

     if (illegalString = /[^\d]$/.exec(expression)) {
       throw new SyntaxError('An expression ends with an unexpected token: ' + illegalString[0]);
     }

     if (illegalString = /\d*(?:\.\d*){2,}/.exec(expression)) {
       throw new SyntaxError('Illegal number: ' + illegalString[0]);
     }

     while (multiplyOrDivide.test(expression)) {
       expression = expression.replace(multiplyOrDivide, calcDyadicOperator);
     }

     while (addOrSubtract.test(expression)) {
       expression = expression.replace(addOrSubtract, calcDyadicOperator);
     }

     return +expression; // ToNumber
   };
 }(String, Math.pow, Math.max));



//---------------------------------------ここまでevalCalculation--------------------
  const tWeight = document.getElementById('target_weight');
  if (tWeight == null){
    return null
  }
  const tSpan = document.getElementById('date');
  const spanButton = document.getElementById('span-button');
  const intensity1 = document.getElementById('intensity-button1');
  const intensity2 = document.getElementById('intensity-button2');
  const intensity3 = document.getElementById('intensity-button3');
  const intensity4 = document.getElementById('intensity-button4');
  const userMetabo = document.getElementById('user-metabo');
  const metabolism = Number(userMetabo.innerText);
  const uWeight = userMetabo.dataset.weight;
  
  

  const trueSave = document.getElementById('save-true');
  const notSave = document.getElementById('save-not');
  const intakeField = document.getElementById('intake-num');
 

  const dateObject = new Date();
  const today = new Date(dateObject.getFullYear()+"/"+(dateObject.getMonth()+1)+"/"+ dateObject.getDate()) 
  let weightNum = 0
  let spanNum = 0
  let intensityNum = 0
  if (tWeight.value != ""){
    weightNum = tWeight.value
  }
  if (tSpan.value != ""){
    spanNum = tSpan.value
  }
  if (document.getElementById('target-intensity-data') != null ){
    const saveIntensity = document.getElementById('target-intensity-data').dataset.intensity;
    intensityNum = saveIntensity
  }
  if (weightNum > 0 && spanNum != 0 && intensityNum != 0){
    intakeMath()
    const saveIntake = document.getElementById('target-intake-data').dataset.intake;
    tWeight.insertAdjacentHTML('afterbegin', `<input type="hidden" id="intake-field-num" name="intake" value=${saveIntake}>`)
  }

  function intakeMath(){
    if (weightNum > 0 && spanNum != 0 && intensityNum != 0){
    //ユーザーの体重と目標体重の差分計算
    const strWeight = uWeight+"-"+weightNum
    const MathWeight = evalCalculation(strWeight);
    console.log(MathWeight);
    //目標期間から今日の日付との差分計算
    spanArray = spanNum.split('-')
    const spanDate = new Date(spanArray[0],spanArray[1]-1,spanArray[2]);
    const span = ((spanDate - today) / 86400000)+1
    console.log(span);

    //体重の差分に7000をかけ、燃焼するカロリーの合計を計算
    const totalKcal = evalCalculation(`${MathWeight}*7000/${span}`);
    console.log(totalKcal);

    //1日の消費カロリー計算
    const combustion = evalCalculation(`${metabolism}*${intensityNum}`)
    console.log(combustion);

    //1日の摂取カロリー計算
    const intake = Math.floor(evalCalculation(`${combustion}-${totalKcal}`));
    console.log(intake);

      const intakeParams = document.getElementById('intake-field-num');
      if (intakeParams != null){
      intakeParams.remove();
      }
      if (intake > metabolism){
        intakeField.innerText=intake
        tWeight.insertAdjacentHTML('afterbegin',`<input type="hidden" name="intake" value=${intake} id="intake-field-num">`)
        trueSave.style.display="block";
        notSave.style.display="none";
      }else {
        tWeight.insertAdjacentHTML('afterbegin',`<input type="hidden" name="intake" value=${intake} id="intake-field-num">`)
        notSave.style.display="block";
        trueSave.style.display="none";
        intakeField.innerText=0
      }
    }
    else{
      intakeField.innerText=0
    }
  }

  tWeight.addEventListener('input', function(){
    weightNum = tWeight.value
    intakeMath()
  });

  spanButton.addEventListener('click', function(){
    spanNum = tSpan.value
    intakeMath()
  });

  intensity1.addEventListener('click',function(){
    intensityNum = 1.3
    intakeMath()
  });

  intensity2.addEventListener('click',function(){
    intensityNum = 1.5
    intakeMath()
  });

  intensity3.addEventListener('click',function(){
    intensityNum = 1.7
    intakeMath()
  });

  intensity4.addEventListener('click',function(){
    intensityNum = 1.9
    intakeMath()
  });
});