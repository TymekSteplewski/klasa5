const pokaz = document.getElementById('pa');
const ukryj = document.getElementById('ua');
const field = document.getElementById('field');

ukryj.addEventListener('change', function(){
    field.style.display = 'none';
})

pokaz.addEventListener('change', function(){
    field.style.display = 'block';
})