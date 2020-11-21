document.addEventListener('turbolinks:load', function(){
  const kcal = document.getElementById('h_kcal');
  const kcalNew = document.getElementById('calory-content')
  const metabo = document.getElementById('h_metabo');
  const metaboCon = document.getElementById('metabo-button')
  const target = document.getElementById('h_target');
  const targetNum = document.getElementById('target-num')
  const index = document.getElementById('h_index');
  const progressId = document.getElementById('progress-height')
  const about = document.getElementById('h_about');
  const aboutId = document.getElementById('about-Id')
 
  if (kcalNew != null){
    kcal.style.backgroundColor="rgba(255, 153, 102, 0.6)";
  }

  if (metaboCon != null){
    metabo.style.backgroundColor="rgba(255, 153, 102, 0.6)";
  }

  if (targetNum != null){
    target.style.backgroundColor="rgba(255, 153, 102, 0.6)";
  }

  if (progressId != null){
    index.style.backgroundColor="rgba(255, 153, 102, 0.6)";
  }

  if (aboutId != null){
    about.style.backgroundColor="rgba(255, 153, 102, 0.6)";
  }

});