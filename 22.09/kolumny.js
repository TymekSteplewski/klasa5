document.querySelector('header').style.backgroundColor='yellow';

const naglowek = document.querySelector('header h1');
console.log({naglowek});

naglowek.style.fontFamily="Arial Black";
naglowek.innerText = "Preambuła";

const sekcje = document.querySelectorAll('section');
console.log({sekcje});

for(const el of sekcje){
    el.style.border = "2px solid brown";
}

const maincolumnh1 = document.querySelector('.main_column h1');
console.log({maincolumnh1});
maincolumnh1.textContent = 'Specjalność szefa:';

const maincol = document.querySelector('.main_column');
const p1 = document.createElement('p');
p1.textContent = 'Kebab na frytkach -_-';
maincol.appendChild(p1);

let footer = document.querySelector('footer');
let div = document.createElement('div');
div.style.backgroundColor = 'pink';
footer.appendChild(div);

let p2 = document.createElement('p');
p2.textContent = '&copy;';
div.appendChild(p2);

const seccol = document.getElementById('c1')
if(seccol){
    seccol.remove();
}

const p3 = document.createElement('p');
p3.innerHTML = '<i>Pochylony Tekst</i>';
const p4 = document.createElement('p');
p4.innerText = '<i>Pochylony Tekst</i>';
header.appendChild(p3);
header.appendChild(p4);

const sek = document.createElement('section');
const body = document.querySelector('body');
sek.style.border = "2px dotted blue";
sek.style.padding = "10px 20px 10px 20px";
sek.textContent = 'Zderzak';
body.appendChild(sek);