// alert('Funcionou')


var menu = document.getElementById('menu');
var toggleMenu = document.getElementById('toggle-menu');
var formCalc = document.getElementById('form-calc');
var resultado = document.getElementById('resultado');

//Função do Menu
toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('hide');
})

//Função do calculo.

formCalc.addEventListener('submit', (event) => {
    event.preventDefault();
    resultado.style = ` background-color: #fff;
                        border: 1px solid #222;
                        border-radius: 5px;
                        padding: 7px;`

    if (formCalc.number1.value === '') {
        resultado.innerHTML = 'Digite um numero'
    } else if (formCalc.number2.value === '') {
        resultado.innerHTML = 'Digite outro numero'
    } else {
        if (operacao.value === 'soma') {
            resultado.innerHTML = Number(formCalc.number1.value) + Number(formCalc.number2.value);
        } else if (operacao.value === 'subtracao') {
            resultado.innerHTML = Number(formCalc.number1.value) - Number(formCalc.number2.value);
        } else if (operacao.value === 'divisao') {
            resultado.innerHTML = Number(formCalc.number1.value) / Number(formCalc.number2.value);
        } else if (operacao.value === 'multiplicacao') {
            resultado.innerHTML = Number(formCalc.number1.value) * Number(formCalc.number2.value);
        } else {
            resultado.innerHTML = 'Voce não selecionou uma opreção'
        }
    }
})

function navMenu(link) {
    var item = document.getElementsByClassName(link);

    if (link === 'calc' && item[0].style.display === 'block')
        item[0].style.display = 'none';

    else
        item[0].style.display = 'block'
}