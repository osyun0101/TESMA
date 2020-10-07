document.addEventListener('turbolinks:load', function(){
  const concept = document.getElementById("concept-link-button");
  if (concept == null){
    return null
  }
  const basalData = document.getElementById("tesma-concept").getAttribute('data-display');
  const math = document.getElementById("math-calory");
  const basal = document.getElementById("basal-about");
  const basalView = document.getElementById("basal-logo-box");
  const mathView = document.getElementById("logic-content");
  const tesmaConcept = document.getElementById("tesma-concept");

  if  (basalData == "true"){
    tesmaConcept.style.display="none";
  mathView.style.display="none";
  basalView.style.display="block";

  basal.style.fontWeight="bold";
    math.style.fontWeight="normal";
    concept.style.fontWeight="normal";
  }

  // 処理が完了したらURLの書き換えでリロードしてもclick_basal.jsが実行されないようにする
  history.replaceState('','','tesma_about');
});