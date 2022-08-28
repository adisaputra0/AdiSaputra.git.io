let judul = document.querySelector('.judul');
judul.innerHTML = [...judul.textContent].map((x) => `<span>${x}</span>`).join('');

let kalkulator = document.querySelector(".kalkulator");
kalkulator.addEventListener("click", () => {
    window.open(`kalkulator/kalkulator.html`);
});
let ticTacToc = document.querySelector(".ticTacToc");
ticTacToc.addEventListener("click", () => {
    window.open(`ticTacToc/ticTacToc.html`);
});

let ig = document.querySelector('.ig');
let gmail = document.querySelector('.gmail');
let whatsapp = document.querySelector('.whatsapp');
ig.addEventListener('click', () => {
    window.open('https://www.instagram.com/adisaputra5944/');
});
gmail.addEventListener('click', () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJpKPqqbdJqdBxNqgbzqKLfMvFlqbMrSZkdkCxLSHvbSPWkBvzGlvWZrDsHGVbtsWNbRg');
});
whatsapp.addEventListener('click', () => {
    window.open('https://wa.me/6283847406501');
});

let booleanMenu = false;
let menu = document.querySelector('.menu');
let navUl = document.querySelector('nav > ul');
let navUlLi = document.querySelectorAll('nav > ul > li');
let menuSpan1 = menu.querySelectorAll('span')[0];
let menuSpan2 = menu.querySelectorAll('span')[1];
let menuSpan3 = menu.querySelectorAll('span')[2];
menu.addEventListener('click', () => {
    if(booleanMenu == false){
        booleanMenu = true;
        menuSpan1.style.transform= 'rotate(-45deg) translateY(13.5px)';
        menuSpan2.style.transform= 'scale(0)';
        menuSpan3.style.transform= 'rotate(45deg) translateY(-14px)';
        navUl.style.backgroundColor= 'rgba(0, 0, 0, 0.671)';
        for(let i = 0; i < 4; i++){
            navUlLi[i].style.display= 'flex';
            setTimeout(function(){
                navUlLi[i].style.transform= 'translateX(0px)';
            },1);
        }
    }
    else{
        booleanMenu = false;
        menuSpan1.style.transform= 'rotate(0deg) translateY(0px)';
        menuSpan2.style.transform= 'scale(1)';
        menuSpan3.style.transform= 'rotate(0deg) translateY(0px)';
        navUl.style.backgroundColor= 'rgba(0, 0, 0, 0)';
        for(let i = 0; i < 4; i++){
            navUlLi[i].style.transform= 'translateX(200px)';
            setTimeout(function(){
                navUlLi[i].style.display= 'none';
            },400);
        }
    }
});
