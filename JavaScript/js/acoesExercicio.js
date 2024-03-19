//alert("funcionou");
var botaoAzul = document.getElementById("azul");
var botaoVerde = document.getElementById("verde");
var botaoLaranja = document.getElementById("laranja");


/* botaoAzul.onclick = function () {
    document.getElementById('textAzul').style.visibility = 'visible',
        document.getElementById('textVerde').style.visibility = 'hidden',
        document.getElementById('textLaranja').style.visibility = 'hidden',
        document.body.style.backgroundColor = 'blue';
}

botaoLaranja.onclick = function () {
    document.getElementById('textLaranja').style.visibility = 'visible',
        document.getElementById('textAzul').style.visibility = 'hidden',
        document.getElementById('textVerde').style.visibility = 'hidden',
        document.body.style.backgroundColor = 'orange';
}
botaoVerde.onclick = function () {
    document.getElementById('textVerde').style.visibility = 'visible',
        document.getElementById('textAzul').style.visibility = 'hidden',
        document.getElementById('textLaranja').style.visibility = 'hidden',
        document.body.style.backgroundColor = 'green';
} */

botaoAzul.onclick = function () {
    document.getElementById('text').innerHTML = 'azul significa...',
        document.body.style.backgroundColor = 'blue';
}

botaoLaranja.onclick = function () {
    document.getElementById('text').innerHTML = 'laranja significa...',
        document.body.style.backgroundColor = 'orange';
}
botaoVerde.onclick = function () {
    document.getElementById('text').innerHTML = "verde significa...";
    document.body.style.backgroundColor = 'green';
} 
 
//Resolução sem usar function
/*btnAzul.onmouseover = () => document.body.style.backgroundColor = "blue"; 
btnAzul.onclick = () => textoH2.textContent = 'Azul Significa Harmonia';
btnVerde.onmouseover = () => document.body.style.backgroundColor = "green"; 
btnVerde.onclick = () => textoH2.textContent = 'Verde Significa Saúde e Esperança';
btnLaranja.onmouseover = () => document.body.style.backgroundColor = "orange";
btnLaranja.onclick = () => textoH2.textContent = 'Laranja Significa Força e Energia'; */