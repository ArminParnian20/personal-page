const mobileMenu=document.querySelector('.menu .menu-item');
const Gotomenu=document.querySelector('.menu-btn');
const Exitmenu=document.querySelector('.btn');
const about=document.querySelector('.about');
const box1=document.getElementById('box1');
const box3=document.getElementById('box3');
const imageBox=document.querySelectorAll('.image-box');
const aboutImage=document.querySelectorAll('.about-image');
const scrollBtn=document.getElementById('scroll');

Gotomenu.addEventListener('click', () => mobileMenu.style.transform='translateX(0)');
Exitmenu.addEventListener('click',() => mobileMenu.style.transform='translateX(100%)');
about.addEventListener('mouseenter',()=> box1.classList.add('animation'));
about.addEventListener('mouseenter',()=> box3.classList.add('animation'));
let i;
for(i=0;i<imageBox.length;i++){
    let panel=aboutImage[i];
    imageBox[i].addEventListener('mouseenter', ()=> panel.style.transform='translateX(0)')
}
for(i=0;i<imageBox.length;i++){
    let panel=aboutImage[i];
    imageBox[i].addEventListener('mouseleave', ()=> panel.style.transform='translateX(100%)')
}
scrollBtn.addEventListener('click',()=> window.scroll({top:0,behavior:'smooth'}));