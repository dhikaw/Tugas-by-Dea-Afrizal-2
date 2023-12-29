document.title = 'Learn JavaScript';
const body = document.body;

body.append('Halo Dunia!!');

const h1 = document.createElement('h1');
h1.textContent = 'CEK CEK!';
body.append(h1);

const btn1 = document.getElementById('btn1');
const defaultText = 'Tombol 1';
btn1.textContent = defaultText;

btn1.style.border = 'none';
btn1.style.padding = '8px';
btn1.style.fontSize = '24px';
btn1.style.background = 'red';

function Warna1() {
  btn1.style.background = 'pink';
}

function Warna2() {
  btn1.style.background = 'red';
}

function Ubah() {
  btn1.textContent = 'XIXIXIXIXI';
}

function Balik() {
  btn1.textContent = defaultText;
}

const btn2 = document.querySelector('.btn2');
btn2.style.border = 'none';
btn2.style.padding = '8px';
btn2.style.fontSize = '24px';
btn2.style.background = 'red';

function Masuk() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Dhika Wahyu Arfian Putra';
  h1.classList.add('collor-mouse')
  body.append(h1)

  const textList = document.getElementsByClassName('collor-mouse')
  for (const element of textList) {
    element.style.color = 'black'
  }
}

function Keluar() {
  const h1 = document.querySelector('.btn2');
  
  const textList = document.getElementsByClassName('collor-mouse')
  for (const element of textList) {
    element.style.color = 'red'
  }
}
