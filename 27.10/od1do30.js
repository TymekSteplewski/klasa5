const button1 = document.getElementById('button1')
const akap1 = document.getElementById('ak1')
const akap2 = document.getElementById('ak2')
const akap3 = document.getElementById('ak3')
const akap4 = document.getElementById('ak4')

button1.addEventListener('click', function(){
    let losowa = Math.floor(Math.random()*30+1)
    akap1.innerHTML = losowa
    akap1.style.color = 'darkorchid'

    if(losowa >= 20){
        akap2.innerHTML = 'Wylosowana liczba jest większa lub równa 20.'
        akap2.style.color = 'magenta'
    } else {
        akap2.innerHTML = ' '
    }
})