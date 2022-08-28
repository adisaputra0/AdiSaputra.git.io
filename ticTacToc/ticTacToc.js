let hasil = document.querySelector('.hasil');
let scoreX = document.querySelector('.scoreX');
let scoreO = document.querySelector('.scoreO');
let tabel = document.querySelector('table');
let kolom1 = document.querySelector('.kolom1');
let kolom2 = document.querySelector('.kolom2');
let kolom3 = document.querySelector('.kolom3');
let kolom4 = document.querySelector('.kolom4');
let kolom5 = document.querySelector('.kolom5');
let kolom6 = document.querySelector('.kolom6');
let kolom7 = document.querySelector('.kolom7');
let kolom8 = document.querySelector('.kolom8');
let kolom9 = document.querySelector('.kolom9');

let x = 0;
let o = 0;

let giliran = 'x';

let kondisi = true;

tabel.addEventListener('click', () => {
    if(kolom1.textContent == 'X' && kolom5.textContent == 'X' && kolom9.textContent == 'X'){
        hasil.textContent = 'X Menang';
    }
    else if(kolom1.textContent == 'X' && kolom4.textContent == 'X' && kolom7.textContent == 'X'){
        hasil.textContent = 'X Menang';
    }
    else if(kolom1.textContent == 'X' && kolom2.textContent == 'X' && kolom3.textContent == 'X'){
        hasil.textContent = 'X Menang';
    }
    else if(kolom2.textContent == 'X' && kolom5.textContent == 'X' && kolom8.textContent == 'X'){
        hasil.textContent = 'X Menang';
    }
    else if(kolom3.textContent == 'X' && kolom5.textContent == 'X' && kolom7.textContent == 'X'){
        hasil.textContent = 'X Menang';
    }
    else if(kolom3.textContent == 'X' && kolom6.textContent == 'X' && kolom9.textContent == 'X'){
        hasil.textContent = 'X Menang';
    }
    else if(kolom4.textContent == 'X' && kolom5.textContent == 'X' && kolom6.textContent == 'X'){
        hasil.textContent = 'X Menang';
    }
    else if(kolom7.textContent == 'X' && kolom8.textContent == 'X' && kolom9.textContent == 'X'){
        hasil.textContent = 'X Menang';
    }


    else if(kolom1.textContent == 'O' && kolom5.textContent == 'O' && kolom9.textContent == 'O'){
        hasil.textContent = 'O Menang';
    }
    else if(kolom1.textContent == 'O' && kolom4.textContent == 'O' && kolom7.textContent == 'O'){
        hasil.textContent = 'O Menang';
    }
    else if(kolom1.textContent == 'O' && kolom2.textContent == 'O' && kolom3.textContent == 'O'){
        hasil.textContent = 'O Menang';
    }
    else if(kolom2.textContent == 'O' && kolom5.textContent == 'O' && kolom8.textContent == 'O'){
        hasil.textContent = 'O Menang';
    }
    else if(kolom3.textContent == 'O' && kolom5.textContent == 'O' && kolom7.textContent == 'O'){
        hasil.textContent = 'O Menang';
    }
    else if(kolom3.textContent == 'O' && kolom6.textContent == 'O' && kolom9.textContent == 'O'){
        hasil.textContent = 'O Menang';
    }
    else if(kolom4.textContent == 'O' && kolom5.textContent == 'O' && kolom6.textContent == 'O'){
        hasil.textContent = 'O Menang';
    }
    else if(kolom7.textContent == 'O' && kolom8.textContent == 'O' && kolom9.textContent == 'O'){
        hasil.textContent = 'O Menang';
    }
    
    if(hasil.textContent == 'X Menang' && kondisi == true){
        x += 1;
        scoreX.textContent = x;
        kondisi = false;
    }
    else if(hasil.textContent == 'O Menang' && kondisi == true){
        o += 1;
        scoreO.textContent = o;
        kondisi = false;
    }
    else if(kolom1.textContent != '' && kolom2.textContent != '' && kolom3.textContent != '' && kolom4.textContent != '' && kolom5.textContent != '' && kolom6.textContent != '' && kolom7.textContent != '' && kolom8.textContent != '' && kolom9.textContent != '' && hasil.textContent == 'Hasil'){
        kondisi = false;
        hasil.textContent = 'Seri';
    }
});
kolom1.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom1.textContent == ''){
            if(giliran == 'x'){
                kolom1.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom1.textContent = 'O';
                giliran = 'x';
            }
        }
    }
});
kolom2.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom2.textContent == ''){
            if(giliran == 'x'){
                kolom2.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom2.textContent = 'O';
                giliran = 'x';
            }
        }   
    }

});
kolom3.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom3.textContent == ''){
            if(giliran == 'x'){
                kolom3.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom3.textContent = 'O';
                giliran = 'x';
            }
        }
    }
});
kolom4.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom4.textContent == ''){
            if(giliran == 'x'){
                kolom4.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom4.textContent = 'O';
                giliran = 'x';
            }
        }
    }
});
kolom5.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom5.textContent == ''){
            if(giliran == 'x'){
                kolom5.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom5.textContent = 'O';
                giliran = 'x';
            }
        }
    }
});
kolom6.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom6.textContent == ''){
            if(giliran == 'x'){
                kolom6.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom6.textContent = 'O';
                giliran = 'x';
            }
        }
    }
});
kolom7.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom7.textContent == ''){
            if(giliran == 'x'){
                kolom7.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom7.textContent = 'O';
                giliran = 'x';
            }
        }
    }
});
kolom8.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom8.textContent == ''){
            if(giliran == 'x'){
                kolom8.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom8.textContent = 'O';
                giliran = 'x';
            }
        }
    }
});
kolom9.addEventListener('click', () => {
    if(hasil.textContent == 'Hasil'){
        if(kolom9.textContent == ''){
            if(giliran == 'x'){
                kolom9.textContent = 'X';
                giliran = 'o';
            }
            else{
                kolom9.textContent = 'O';
                giliran = 'x';
            }
        }
    }
});


let ulang = document.querySelector('.ulang');
ulang.addEventListener('click', () => {
    hasil.textContent = 'Hasil';

    kolom1.textContent = '';
    kolom2.textContent = '';
    kolom3.textContent = '';
    kolom4.textContent = '';
    kolom5.textContent = '';
    kolom6.textContent = '';
    kolom7.textContent = '';
    kolom8.textContent = '';
    kolom9.textContent = '';

    giliran = 'x';

    kondisi = true;
});