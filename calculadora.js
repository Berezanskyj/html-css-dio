// sem teste pq eu ODEIO js xD

function calculadora(){
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**) "));

    let n1 = Number(prompt('Digite o primeiro número: '));
    let n2 = Number(prompt('Digite o segundo número: '));
    let result;

    function plus(){
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`)
    }

    function minus(){
        result = n1 - n2;
        alert(`${n1} - ${n2} = ${result}`)
    }

    function times(){
        result = n1 * n2;
        alert(`${n1} * ${n2} = ${result}`)
    }

    function div_real(){
        result = n1 / n2;
        alert(`${n1} / ${n2} = ${result}`)
    }

    function div_int(){
        result = n1 % n2;
        alert(`${n1} % ${n2} = ${result}`)
    }

    function pot(){
        result = n1 ** n2;
        alert(`${n1} ** ${n2} = ${result}`)
    }

    if (operacao === 1){
        plus();
    }else if (operacao === 2){
        minus();
    }else if (operacao === 3){
        times();
    }else if (operacao === 4){
        div_real();
    }else if (operacao === 5){
        div_int();
    }else if (operacao === 6){
        pot();
    }

}




calculadora();