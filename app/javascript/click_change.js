document.addEventListener('turbolinks:load', function(){
  const concept = document.getElementById("concept-link-button");
  if (concept == null){
     return null
  }
  //tesma_about.html.erbの処理ーーーーーーーーーーーーーーーーーーーーーー
  const math = document.getElementById("math-calory");
  const basal = document.getElementById("basal-about");
  const basalView = document.getElementById("basal-logo-box");
  const mathView = document.getElementById("logic-content");
  const tesmaConcept = document.getElementById("tesma-concept");
 
  concept.addEventListener('click', function(){
     tesmaConcept.style.display="block";
     mathView.style.display="none";
     basalView.style.display="none";

     concept.style.fontWeight="bold";
     math.style.fontWeight="normal";
     basal.style.fontWeight="normal";
  });

  math.addEventListener('click', function(){
    tesmaConcept.style.display="none";
    mathView.style.display="block";
    basalView.style.display="none";

    math.style.fontWeight="bold";
    concept.style.fontWeight="normal";
     basal.style.fontWeight="normal";
 });

 basal.addEventListener('click', function(){
  tesmaConcept.style.display="none";
  mathView.style.display="none";
  basalView.style.display="block";

  basal.style.fontWeight="bold";
    math.style.fontWeight="normal";
    concept.style.fontWeight="normal";
});


   const conceptDisplay= document.defaultView.getComputedStyle(tesmaConcept, null).display
   const mathDisplay= document.defaultView.getComputedStyle(mathView, null).display
   const basalDisplay= document.defaultView.getComputedStyle(basalView, null).display

   if (conceptDisplay == "block"){
     concept.style.fontWeight="bold";
     math.style.fontWeight="normal";
     basal.style.fontWeight="normal";
   }
  
   if (mathDisplay == "block"){
    math.style.fontWeight="bold";
    concept.style.fontWeight="normal";
     basal.style.fontWeight="normal";
  }

  if ( basalDisplay== "block"){
    basal.style.fontWeight="bold";
    math.style.fontWeight="normal";
    concept.style.fontWeight="normal";
  }

  //tesma_about.html.erbの処理ーーーーーーーーーーーーーーーーーーーーーー

});