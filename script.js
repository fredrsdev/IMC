
//Atenção: Sempre colocque no html a importação do Script no final da TAG <body> .


const button = document.getElementById('button'); // "document.getElementById('button')" traz o valor do elemento para varíavel.

//console.log(button) -->> Validar se pegou o elemento correto.

const nome = document.getElementById('nome'); //  "document.getElementById('nome').value;" ira pegar o valor digitado dentro do imput. 
//console.log(nome)

const peso = document.getElementById('peso'); // "+document.getElementById('peso').value;" o sinal de mais irá transformar a string do getelemntById em number.

const altura = document.getElementById('altura');

const resultado = document.getElementById('resultado');

// if return para criar a logica, pois ficará melhor escrito.

// Função geText irá apresentar o resultado

// Regras de negocio IMC:

    // IMC for maior que 40 Obesidade grau III
    // IMC for maior que 35 Obesidade grau II
    // IMC for maior que 30 Obesidade grau I
    // IMC for maior que 25 Levemente acima do peso
    // IMC for maior que 18.5 Peso Ideal


const getText = (imc) => {

    if(imc > 40) return 'Obesidade grau III';
    if(imc > 35) return 'Obesidade grau II';
    if(imc > 30) return 'Obesidade grau I';
    if(imc > 25) return 'Levemente acima do Peso';
    if(imc > 18.5) return 'Seu peso está ideal, Parabéns!!!';
    return 'Abaixo do peso';

};


// Logica do IMC: (peso / altura * altura)

//Função do calculo do IMC:

const imcCalc = () => {

        if(!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos'; // tratamento dos campos vazios.

    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1); // ".toFixed(1)" foi usado para converter os valores em numeros inteiro. "+" transforma string em number. "value" pega o valo inserido no imput.
    
    //console.log(ValorImc); //usamos "console.log()" para debugar o código e validar se o calculo está correto. 
    
    //console.log(valorImc);

    resultado.textContent = `${nome.value} - ${getText(valorImc)}`; // "getText(valorImc)" passa o resultado da função ImcCalc para a função getText. "resultado.textContent" recebe os valores das funções e entregue a const resultado.
};

// Atribuir um evento no butão para executar as funções:

button.addEventListener('click', imcCalc); // atribuiu ao butão a execução da função ImcCalc ao dar um click.