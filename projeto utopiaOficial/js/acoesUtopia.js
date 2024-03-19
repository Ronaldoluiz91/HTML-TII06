
//alert('funcionou')
var btnmostrar = document.getElementById('iconMenu'); // icone  do menu
var menus = document.getElementById('itens'); // menu a ser ocultado e/ou mostrado
var logo = document.getElementById('logotipo') //logo do topo

btnmostrar.addEventListener('click', function() {
    if(menus.style.display === 'block')
    {
        menus.style.display = 'none';
    }
     else{
        menus.style.display = 'block';
    }
})

btnmostrar.addEventListener('click' , function(){
    if(logo.style.display === 'none')
    {
        logo.style.display = 'block';
    }
     else{
        logo.style.display = 'none';
    }
})






