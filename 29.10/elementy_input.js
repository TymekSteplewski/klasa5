let petla = document.getElementById('p1')

for(let n=1; n<101; n++){
    let input = document.createElement('input')
    input.id = 'ajdi' + n
    input.name = 'abc'
    input.placeholder = 'Element numer ' + n
    input.style.margin = '10px 10px 10px 10px'
    input.style.boxShadow = '5px 5px lightblue'
    petla.appendChild(input)
    if(n%5==0){
        let br = document.createElement('br')
        petla.appendChild(br)
    }
}