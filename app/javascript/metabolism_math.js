document.addEventListener('turbolinks:load', function(){
  const sex = document.getElementById('user_sex_id');
  if (sex == null ){
    return null
  }
  const age = document.getElementById('user_age');
  const stature = document.getElementById('user_stature');
  const weight = document.getElementById('user_weight');
  const metabolism = document.getElementById('user_metabolism');

  let ageValue = 0
  let sexValue = 0
  let statureValue = 0
  let weightValue = 0

  age.addEventListener('input', function(){
    ageValue=age.value

    metaboMath()
  });

  sex.addEventListener('input', function(){
    sexValue=sex.value

    metaboMath()
  });

  stature.addEventListener('input', function(){
    statureValue=stature.value

    metaboMath()
  });

  weight.addEventListener('input', function(){
    weightValue=weight.value

    metaboMath()
  });

  function metaboMath(){
    if (ageValue > 0 && sexValue > 1 && statureValue > 0 && weightValue > 0){
      if (sexValue == 2){
        let metabolismValue = (0.0481 * weightValue + 0.0234 * statureValue - 0.0138*ageValue -0.4235)*1000/4.186
        metabolism.value=Math.round(metabolismValue)
      } else {
        let metabolismValue = (0.0481 * weightValue + 0.0234 * statureValue - 0.0138*ageValue -0.9708)*1000/4.186
        metabolism.value=Math.round(metabolismValue)
      }
    }
  }
});