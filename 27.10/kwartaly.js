let miesiac = Math.floor(Math.random()*15+1)
const akap1 = document.getElementById('ak1')
const akap2 = document.getElementById('ak2')
const button1 = document.getElementById('bt1')

akap1.innerHTML = miesiac
akap1.style.textAlign = 'center'
akap1.style.fontFamily = 'cursive'
akap1.style.fontSize = '30px'
akap1.style.fontStyle = 'bold'
akap1.style.borderTop = '4px dashed navy'
akap1.style.borderBottom = '4px dashed navy'
akap1.style.backgroundColor = '#c6b6f0'
akap1.style.padding = '10px'

switch(miesiac){
    case 1,2,3:
        akap2.innerHTML = 'I kwartał'
    break;
    case 4,5,6:
        akap2.innerHTML = 'II kwartał'
    break;
    case 7,8,9:
        akap2.innerHTML = 'III kwartał'
    break;
    case 10,11,12:
        akap2.innerHTML = 'IIII kwartał'
    break;
    default: 'Błędny numer miesiąca'
}