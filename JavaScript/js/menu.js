/* function menu() {
    var menu = document.getElementById('menu');
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
} */

var icon = document.getElementsByClassName('icon');
var menu = document.getElementById('menu');

icon[0].addEventListener('click', () =>{
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
})

//duas formas de fazer um menu hamburguer