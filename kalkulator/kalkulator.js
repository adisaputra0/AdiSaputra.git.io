let input = document.querySelector(".input");

let angka7 = document.querySelector(".angka7");
let angka8 = document.querySelector(".angka8");
let angka9 = document.querySelector(".angka9");
let angka4 = document.querySelector(".angka4");
let angka5 = document.querySelector(".angka5");
let angka6 = document.querySelector(".angka6");
let angka1 = document.querySelector(".angka1");
let angka2 = document.querySelector(".angka2");
let angka3 = document.querySelector(".angka3");
let angka0 = document.querySelector(".angka0");

angka7.addEventListener("click", () => {
    input.textContent += 7;
});
angka8.addEventListener("click", () => {
    input.textContent += 8;
});
angka9.addEventListener("click", () => {
    input.textContent += 9;
});
angka4.addEventListener("click", () => {
    input.textContent += 4;
});
angka5.addEventListener("click", () => {
    input.textContent += 5;
});
angka6.addEventListener("click", () => {
    input.textContent += 6;
});
angka1.addEventListener("click", () => {
    input.textContent += 1;
});
angka2.addEventListener("click", () => {
    input.textContent += 2;
});
angka3.addEventListener("click", () => {
    input.textContent += 3;
});
angka0.addEventListener("click", () => {
    input.textContent += 0;
});

let bagi = document.querySelector(".bagi");
let kali = document.querySelector(".kali");
let koma = document.querySelector(".koma");
let tambah = document.querySelector(".tambah");
let kurang = document.querySelector(".kurang");
let samaDengan = document.querySelector(".samaDengan");
let hasil=  [];

bagi.addEventListener("click", () => {
    input.textContent += "/";
});
kali.addEventListener("click", () => {
    input.textContent += "*";
});
koma.addEventListener("click", () => {
    input.textContent += ".";
});
tambah.addEventListener("click", () => {
    input.textContent += "+";
});
kurang.addEventListener("click", () => {
    input.textContent += "-";
});
samaDengan.addEventListener("click", () => {
    input.textContent = eval(input.textContent);
});

let bersihkan = document.querySelector(".bersihkan");
bersihkan.addEventListener("click", () => {
    input.textContent = "";
});

let hapus = document.querySelector(".hapus");
let angka;
let hapusAngka;
hapus.addEventListener("click", () => {
    angka = [...input.textContent];
    hapusAngka = angka.pop();
    angka = angka.map((x) => `${x == `,`? ``:`${x}` }`).join("");
    input.textContent = angka;
});