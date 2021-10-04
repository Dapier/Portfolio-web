import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Loading effect
window.addEventListener("load", () =>{
  document.querySelector(".page-loader").classList.add("slide-out-right");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 10000);
});


 //bg animation effect
 function bgAnimationItems() {
  const rows = 9, cols = 10;
  for(let i = 0; i < rows; i++){
      for(let j =0 ; j < cols ; j++){
      const div = document.createElement("div");
      div.className = `col-${j+1}`;
      document.querySelector(".bg-animation-effect").appendChild(div);
      }
  }
}

function toggleBodyScrolling(){
  document.body.classList.toggle("hide-scrolling");

}

bgAnimationItems();

//Toggle navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",toggleNavbar);

function toggleNavbar(){
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
  toggleOverlayEffect();
  toggleBodyScrolling();
}


//hide & show section

document.addEventListener("click", (e) => {
  if(e.target.classList.contains("link-item") && e.target.hash !== ""){
      const hash = e.target.hash;
      if(e.target.classList.contains("nav-item")){
        activeSection(hash);
        toggleNavbar();
      }
      else{
          toggleBodyScrolling();
          toggleOverlayEffect();
          document.querySelector(".nav-toggler").classList.add("toggle-hide");
          setTimeout(() =>{
              activeSection(hash); 
              toggleOverlayEffect();
              toggleBodyScrolling(); 
              document.querySelector(".nav-toggler").classList.add("toggle-hide");
          }, 950);
      }
  }
});

function activeSection(sectionId){
  document.querySelector("section.active").classList.remove("active");
  document.querySelector(sectionId).classList.add("active");
  window.scrollTo(0,0)
}



function toggleOverlayEffect(){
  document.querySelector(".overlay-effect").classList.toggle("active");
}



const filterBtnsContainer = document.querySelector(".portfolio-filter");
let portfolioItems;

filterBtnsContainer.addEventListener("click", (e) =>{
  if(e.target.classList.contains("portfolio-filter-btn") && 
  !e.target.classList.contains("active")){
    filterBtnsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    document.querySelector(".filter-status").classList.add("active");
    document.querySelector(".filter-status p").innerHTML = `Filtering <span>${e.target.innerHTML}</span> works`;
    setTimeout(() =>{
      filterItems(e.target)

    },400);
    setTimeout(() =>{
    document.querySelector(".filter-status").classList.remove("active");
    toggleBodyScrolling();
    },800)
  }
});

function filterItems(filterBtn){
  const selectedCategory = filterBtn.getAttribute("data-filter");
  document.querySelectorAll(".porfolio-item").forEach((item) =>{
    const category = item.getAttribute("data-category").split(",");
    if(category.indexOf(selectedCategory) !== -1 || selectedCategory === "all"){
      item.classList.add("show");
    }else{
      item.classList.remove("show")
    }
  });
  portfolioItems = document.querySelectorAll(".porfolio-item.show");
  
}
filterItems(document.querySelector(".portfolio-filter-btn.active"));


let porfolioItemIndex;
document.addEventListener("click", (e) =>{
  if(e.target.closest(".porfolio-item")){
    const currentItem = e.target.closest(".porfolio-item");
    porfolioItemIndex = Array.from(portfolioItems).indexOf(currentItem);
    togglePopup();
    portfolioItemsDetails();
    updateNextPrevItem();
  }
});

function togglePopup(){
  document.querySelector(".portfolioPopup").classList.toggle("open");
  toggleBodyScrolling();
}
document.querySelector(".pp-close-btn").addEventListener("click", togglePopup)

function portfolioItemsDetails(){

  //take image from portfolio item array
  document.querySelector(".pp-thumbnail img").src = portfolioItems[porfolioItemIndex].querySelector("img").src;
  

  //take title from portfolio item array
  document.querySelector(".pp-header h3").innerHTML = portfolioItems[porfolioItemIndex].querySelector(".portfolio-item-title").innerHTML;

  //take body from porfolio item array
  document.querySelector(".pp-body").innerHTML = portfolioItems[porfolioItemIndex].querySelector(".portfolio-item-details").innerHTML;

  //show counter and deploy where are 
  document.querySelector(".pp-counter").innerHTML = `${porfolioItemIndex+1} of ${portfolioItems.length}
   (<span title="category">${document.querySelector(".portfolio-filter-btn.active").innerHTML}</span>)`;
}


function updateNextPrevItem(){
  //Left arrow
  if(porfolioItemIndex !== 0){
    document.querySelector(".pp-footer-left").classList.remove("hidden");
    document.querySelector(".pp-footer-left h3").innerHTML = portfolioItems[porfolioItemIndex-1].querySelector("h3").innerHTML;

    document.querySelector(".pp-footer-left img").src = portfolioItems[porfolioItemIndex-1].querySelector("img").src;

  }else{
    document.querySelector(".pp-footer-left").classList.add("hidden");

  }

  //Right arrow
  if(porfolioItemIndex !== portfolioItems.length-1){
    document.querySelector(".pp-footer-right").classList.remove("hidden");
    document.querySelector(".pp-footer-right h3").innerHTML = portfolioItems[porfolioItemIndex+1].querySelector("h3").innerHTML;

    document.querySelector(".pp-footer-right img").src = portfolioItems[porfolioItemIndex+1].querySelector("img").src;
  }else{
    document.querySelector(".pp-footer-right").classList.add("hidden");

  }

}

document.querySelector(".pp-prev-btn").addEventListener("click", () =>{
    changePortfolioItem("prev");
});

document.querySelector(".pp-next-btn").addEventListener("click", () =>{
    changePortfolioItem("next");
});


function changePortfolioItem(direction){
  if(direction == "prev"){
    porfolioItemIndex--;
  }
  else{
    porfolioItemIndex++;
  }

  document.querySelector(".pp-overlay").classList.add(direction);
  setTimeout(() =>{
    document.querySelector(".pp-inner").scrollTo(0,0);
    portfolioItemsDetails();
    updateNextPrevItem();

  },400);
  setTimeout(() =>{
    document.querySelector(".pp-overlay").classList.remove(direction);
  },1000)
}



document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("toggle-contact-form-btn")){
    document.querySelector(".contact-form").classList.toggle("open");
    toggleBodyScrolling();
  }
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



