
let Imgs = {
  montaleSrc: ['./Imgs/Montale/rasm-1.jpg', './Imgs/Montale/rasm-2.jpg','./Imgs/Montale/rasm-3.jpg','./Imgs/Montale/rasm-4.jpg','./Imgs/Montale/rasm-5.jpg','./Imgs/Montale/rasm-6.jpg','./Imgs/Montale/rasm-7.jpg'],
  tomFordSrc: ['./Imgs/TomFord/rasm-1.jpg', './Imgs/TomFord/rasm-2.jpg', './Imgs/TomFord/rasm-3.jpg', './Imgs/TomFord/rasm-4.jpg', './Imgs/TomFord/rasm-5.jpg'],
  dolceSrc: ['./Imgs/Dolce/rasm-1.jpg', './Imgs/Dolce/rasm-2.jpg', './Imgs/Dolce/rasm-3.jpg'],
  gucciSrc: ['./Imgs/Gucci/rasm-1.jpg', './Imgs/Gucci/rasm-2.jpg','./Imgs/Gucci/rasm-3.jpg','./Imgs/Gucci/rasm-4.jpg','./Imgs/Gucci/rasm-5.jpg'],
}


let montale = document.querySelectorAll('.montale');
let gucci = document.querySelectorAll('.gucci');
let tomFord = document.querySelectorAll('.tomFord');
let dolce = document.querySelectorAll('.dolce');

let div = document.querySelector('.listImg');
let div2 = document.querySelector('.listImg div')

montale.forEach((item, index) => {
  item.addEventListener('click', () => {
    div2.innerHTML = `<img src="${Imgs.montaleSrc[index]}" alt="Rasm" />`;
    div.classList.toggle('disNone');
  });
});
gucci.forEach((item, index) => {
  item.addEventListener('click', () => {
    div2.innerHTML = `<img src="${Imgs.gucciSrc[index]}" alt="Rasm" />`;
    div.classList.toggle('disNone');
  });
});
tomFord.forEach((item, index) => {
  item.addEventListener('click', () => {
    div2.innerHTML = `<img src="${Imgs.tomFordSrc[index]}" alt="Rasm" />`;
    div.classList.toggle('disNone');
  });
});
dolce.forEach((item, index) => {
  item.addEventListener('click', () => {
    div2.innerHTML = `<img src="${Imgs.dolceSrc[index]}" alt="Rasm" />`;
    div.classList.toggle('disNone');
  });
});

let closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', () => {
  div.classList.toggle('disNone');
});

