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