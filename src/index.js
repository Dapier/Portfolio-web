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





function toggleBodyScrolling(){
  document.body.classList.toggle("hide-scrolling");

}


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
              document.querySelector(".nav-toggler").classList.remove("toggle-hide");
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

//Effect text scramble

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }

        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

} // ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————


const phrases = ['Web Developer Jr', 'Passionate UI/UX ', 'Software engineer in process...', 'Front-End Developer', 'React Lover', 'Passionate API maker'];
const el = document.querySelector('.text');
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 700);
  });
  counter = (counter + 1) % phrases.length;
};

next();




//Apper effect
const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(rev){

    observer.observe(rev)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



