function calculadora () {
    var operacao = Number( prompt(`Escolha uma opção: \n 1. SOMA (+)\n 2. SUBTRAÇÃO (-) \n 3. MULTIPLICAÇÃO (*)\n 4. DIVISÃO REAL (/)\n 5. DIVISÃO INTEIRA (%)\n 6. POTENCIAÇÃO(**)`))


if (!operacao || operacao >= 7) {
    alert(`Operação inválida!`)
    calculadora();
}else {

let n1= Number( prompt("Insira o primeiro valor"))
let n2= Number( prompt("Insira o segundo valor"))
let resultado;


function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
}

function subtracao(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
}

function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
}

function divisaoReal(){
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
}

function divisaoInteira(){
    resultado = n1 % n2;
    alert(`O resto da divisão entre  ${n1} e ${n2} é ${resultado}` )
    novaOperacao();
}

function divisaoReal(){
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
    novaOperacao();
}

function novaOperacao(){
    let opcao = prompt(`Deseja fazer outra operação?\n 1. Sim\n 2. Não`);
    
    if (opcao ==1) {
        calculadora();
    } else if (opcao ==2) {
        alert("Até mais!")
    } else {
        alert("Digite uma opção válida")
        novaOperacao();
    }
}
}



if (operacao == 1){
     soma();
} else if (operacao ==2){
     subtracao();
} else if (operacao ==3){
     multiplicacao();
} else if (operacao ==4){
     divisaoReal();
} else if (operacao ==5){
     divisaoInteira();
} else if (operacao ==6){
     potenciacao();
}
}

calculadora();