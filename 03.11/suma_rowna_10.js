let cus = document.querySelector('fieldset')
let text = ''

for(let i=100; i<1000; i++){
    text += i + ', '
}

text = text.slice(0, -2)
cus.textContent = text + '.'
