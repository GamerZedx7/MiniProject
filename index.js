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
    
m1 = document.querySelector('.optionsbox')
m1.addEventListener('click',() =>{
  window.location.href="map.html"
});