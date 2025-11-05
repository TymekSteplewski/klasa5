const but = document.getElementById('but1')

but.addEventListener('click', function(){
   
    const tbl_el = document.getElementById('tabela')

    const col_el = document.getElementById('in_col')
    let col_vl = col_el.value

    const row_el = document.getElementById('in_row')
    let row_vl = row_el.value

    let c = 1
    let r = 1
    tbl_el.innerHTML = ''
    
    console.log(row_vl) + console.log(col_vl)
    const tr = document.createElement('tr')
    while(r <= row_vl){
        const tr = document.createElement('tr')
        while(c <= col_vl){
            const td = document.createElement('td')
            td.textContent = `${r}|${c}`
            tr.appendChild(td)
            c++
        }
        tbl_el.appendChild(tr)
        r++
        c = 1
    }
})