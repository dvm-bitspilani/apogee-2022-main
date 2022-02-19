let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('open');  
})

window.onload = function(){
  let cities = document.querySelectorAll(".city");
  
  // for(let i = 2; i<6; i++){
  //   cities[i].style.transition = "1.5s"
  // }

  cities[0].style.transform = "translate(-45%, 0)";
  cities[1].style.transform = "translate(-45%, 0)";
  cities[2].style.transform = "translate(-50%, 15%)";
  cities[3].style.transform = "translate(-53%, 8%)";
  cities[4].style.transform = "translate(-75%, 5%)";
  cities[5].style.transform = "translate(-2%, -3%)";
}