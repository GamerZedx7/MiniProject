const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".optionsbox");

const optionsList = document.querySelectorAll(".options");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    
  });
});

function m1(){
m1 = document.querySelector('.options1')
m1.addEventListener('click',() =>{
  window.location.href="info1.html"
});
}
function m2(){
m2= document.querySelector('.options2')
m2.addEventListener('click',() =>{
  window.location.href="info2.html"
});
}
function m3(){
m2= document.querySelector('.options3')
m2.addEventListener('click',() =>{
  window.location.href="info3.html"
});
}

