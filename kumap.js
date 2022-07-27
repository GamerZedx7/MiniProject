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
  window.location.href="kumap1.html"
});
}

