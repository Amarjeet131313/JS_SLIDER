const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let sliderNumber = 1;
const length = images.length;

// start for dots//

const bottom = document.querySelector('.bottom');

for(let i = 0; i<length;i++){
  const div = document.createElement('div');
  div.className = 'button';
  bottom.appendChild(div);
};

const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = 'white';

const resetBg = ()=>{
  buttons.forEach((button)=>{
    button.style.backgroundColor = 'transparent';
    button.addEventListener('mouseover',stopSliderShow); //mouse dots k uper laeye autoplay bnd ho jaye ga//
    button.addEventListener('mouseout',startSliderShow);
  })
}

buttons.forEach((button,i)=>{
  button.addEventListener('click',()=>{
  resetBg();
  slider.style.transform = `translateX(-${i*750}px)`;
  sliderNumber = i+1;
  button.style.backgroundColor = 'white';
  });
});

const changeColor = ()=>{
  resetBg();
  buttons[sliderNumber-1].style.backgroundColor = 'white';
};

// end for dots//




const nextslide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 750}px)`;
  sliderNumber++;
};
const prevslide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 750}px)`;
  sliderNumber--;
};

const getfirstslide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};
const getlastslide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 750}px)`;
  sliderNumber = length;
};

right.addEventListener("click", () => {
  sliderNumber < length ? nextslide() : getfirstslide();
  changeColor();//slider arrow k sath niche dots bhi slide krege is functun se//
});

left.addEventListener("click", () => {
  sliderNumber > 1 ? prevslide() : getlastslide();
  changeColor(); //slider arrow k sath niche dots bhi slide krege is functun se//
});

// start auto slider code//

let sliderInterval;

const startSliderShow = ()=>{
  sliderInterval = setInterval(()=>{ //setInterval means kitne time bad slider ko auto play krvana chahteh//
    sliderNumber < length ? nextslide() : getfirstslide(); changeColor();
  },2000); // 2000 means 2sec , 3000 means 3sec etc.//
};

const stopSliderShow = ()=>{
  clearInterval(sliderInterval);
}

startSliderShow();

slider.addEventListener('mouseover',stopSliderShow); //mouse slider k upper laeye autoplay bnd ho jaye ga//
slider.addEventListener('mouseout',startSliderShow);
right.addEventListener('mouseover',stopSliderShow); //mouse right arrow k uper laeye autoplay bnd ho jaye ga//
right.addEventListener('mouseout',startSliderShow);
left.addEventListener('mouseover',stopSliderShow); //mouse left arrow k uper laeye autoplay bnd ho jaye ga//
left.addEventListener('mouseout',startSliderShow);

// end auto slider code//
