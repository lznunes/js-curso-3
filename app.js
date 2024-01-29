let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
function verificarChute(){
    console.log('O botão foi clicado!');
}

function alertMessage(){
    alert('Eu amo JS');
}

function promptCity(){
    let cidade = window.prompt('Digite uma cidade do Brasil:');
    alert('Estive em ' + cidade + ' e lembrei de você');
}


function somarNumeber(){
    let numero1 = parseInt(window.prompt('Digite o primeiro numero:'));
    let numero2 = parseInt(window.prompt('Digite o segundo numero:'));
    let somatoria = numero1 + numero2
    alert('O resultado de: ' + numero1 + ' + ' + numero2 + ' é: ' + somatoria);
}