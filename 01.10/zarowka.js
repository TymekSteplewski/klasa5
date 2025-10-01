const light = document.getElementById('main-zarowka')

const button1 = document.getElementById('but-on')
const button2 = document.getElementById('but-off')

const radio1 = document.getElementById('radio-on')
const radio2 = document.getElementById('radio-off')

const checkbox = document.getElementById('check')
const change = document.getElementById('sign')

button1.addEventListener('click', function(){
    light.src = 'zaruwaon.png'
    radio1.checked = true
    checkbox.checked = true
    change.innerText = 'Włączono'
})

button2.addEventListener('click', function(){
    light.src = 'zaruwaoff.png'
    radio2.checked = true
    checkbox.checked = true
    change.innerText = 'Wyłączono'
})

radio1.addEventListener('click', function(){
    light.src = 'zaruwaon.png'
    change.innerText = 'Włączono'
    checkbox.checked = true
})

radio2.addEventListener('click', function(){
    light.src = 'zaruwaoff.png'
    change.innerText = 'Wyłączono'
})

checkbox.addEventListener('change', function(){
    if(checkbox.checked){
        light.src = 'zaruwaon.png'
        radio1.checked = true
        change.innerText = 'Włączono'
    } else {
        light.src = 'zaruwaoff.png'
        radio2.checked = true
        change.innerText = 'Wyłączono'
    }
})