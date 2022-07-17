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
  window.location.href="map1.html"
});
}
function m2(){
m2= document.querySelector('.options2')
m2.addEventListener('click',() =>{
  window.location.href="map2.html"
});
}
function m3(){
m3= document.querySelector('.options3')
m3.addEventListener('click',() =>{
  window.location.href="map3.html"
});
}
function m4(){
m4= document.querySelector('.options4')
m4.addEventListener('click',() =>{
  window.location.href="map4.html"
});
}
function m5(){
m5= document.querySelector('.options5')
m5.addEventListener('click',() =>{
  window.location.href="map5.html"
});
}
function m6(){
m6= document.querySelector('.options6')
m6.addEventListener('click',() =>{
  window.location.href="map6.html"
});
}

// var image=document.getElementById('m1');
// m1 = document.querySelector('.optionsbox')
// m1.addEventListener('click',() =>{
    //  <iframe src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d63131.59365735117!2d76.85694077850296!3d8.526095764906183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x3b05bb801384b295%3A0x1d59f5a4731d65f7!2sTrivandrum%20Airport%20(TRV)%2C%20Airport%20Road%2C%20Chacka%2C%20Thiruvananthapuram%2C%20Kerala!3m2!1d8.4834201!2d76.9198194!4m5!1s0x3b05be54c4adee2d%3A0x6367a27de8baa463!2sKazhakkoottam%2C%20Kerala!3m2!1d8.5685708!2d76.87313329999999!4m5!1s0x3b05be4db228e865%3A0x86e82fcb1e3e3ad0!2sMarian%20Engineering%20College%2C%20Menamkulam%2C%20Kazhakkoottam%2C%20Kerala%20695582!3m2!1d8.558653399999999!2d76.8594604!5e0!3m2!1sen!2sin!4v1657904738778!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

// });

// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.031 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
  //   const marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map,
  //   });
  // }
  
  // window.initMap = initMap;
// function onchange(){
//   var image=document.getElementById('m1');
//   image.src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d63131.59365735117!2d76.85694077850296!3d8.526095764906183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x3b05bb801384b295%3A0x1d59f5a4731d65f7!2sTrivandrum%20Airport%20(TRV)%2C%20Airport%20Road%2C%20Chacka%2C%20Thiruvananthapuram%2C%20Kerala!3m2!1d8.4834201!2d76.9198194!4m5!1s0x3b05be54c4adee2d%3A0x6367a27de8baa463!2sKazhakkoottam%2C%20Kerala!3m2!1d8.5685708!2d76.87313329999999!4m5!1s0x3b05be4db228e865%3A0x86e82fcb1e3e3ad0!2sMarian%20Engineering%20College%2C%20Menamkulam%2C%20Kazhakkoottam%2C%20Kerala%20695582!3m2!1d8.558653399999999!2d76.8594604!5e0!3m2!1sen!2sin!4v1657904738778!5m2!1sen!2sin"
// }