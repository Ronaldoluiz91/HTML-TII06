//alert ('funcinou')

var vetor = [];

for (var posicao = 0; posicao < vetor.length; posicao++) {
    console.log(vetor[posicao]);
}

var formContato = document.getElementById('form-contato');
var divLista = document.getElementById('lista');

var nome = [];
var email = [];
var telefone = [];
var assunto = [];
var msg = [];

formContato.addEventListener('submit', (event) => {
    event.preventDefault();

    nome.push(formContato.nome.value);
    email.push(formContato.email.value);
    telefone.push(formContato.telefone.value);
    assunto.push(formContato.assunto.value);
    msg.push(formContato.mensagem.value);
    gerarLista()
})

function gerarLista() {
    var auxLista = '';

    for (var posicao = 0; posicao < nome.length; posicao++) {
        auxLista += `<div class= "card">

                            <div class= "dados-label">
                            <div>Nome Completo: </div>
                            <div> ${nome[posicao]} </div>
                            </div>

                            <div class= "dados-label">
                            <div>Email: </div>
                            <div> ${email[posicao]} </div>
                            </div>

                            <div class= "dados-label">
                            <div>Telefone: </div>
                            <div> ${telefone[posicao]} </div>
                            </div>

                            <div class= "dados-label">
                            <div>Assunto: </div>
                            <div> ${assunto[posicao]} </div>
                            </div>

                            <div class= "dados-label">
                            <div>Mensagem: </div>
                            <div> ${msg[posicao]} </div>
                            </div>

                    </div>`;
    }

    divLista.innerHTML = auxLista
}