document.addEventListener('turbolinks:load', function(){
  const submit = document.getElementById('submit-meta');
  submit.addEventListener('click', function(e){
    const stature = document.getElementById('stature').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const sexId = document.getElementById('update-meta').dataset.sex;
    const add =  document.getElementById('update-meta');

    if (age >= 0 && sexId >= 1 && stature >= 0 && weight >= 0){
      if (sexId == 2){
        const Value = (0.0481 * weight + 0.0234 * stature - 0.0138*age -0.4235)*1000/4.186
        const metabolismValue=Math.round(Value)

        add.insertAdjacentHTML('afterbegin',`<input name="metabolism" type="hidden" value=${metabolismValue}>`)
      } else {
        const Value = (0.0481 * weight + 0.0234 * stature - 0.0138*age -0.9708)*1000/4.186
        const metabolismValue=Math.round(Value)

        add.insertAdjacentHTML('afterbegin',`<input name="metabolism" type="hidden value=${metabolismValue}>`)
      }
    }

  });
});