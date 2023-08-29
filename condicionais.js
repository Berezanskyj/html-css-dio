const jogador1 = 1;
const jogador2 = 0;
let placar;

// if ternario
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Os jogadores não são válidos")
//

// if normal
if(jogador1 > jogador2){
    console.log("O jogador 1 marcou ponto!")
    placar = jogador1 > jogador2
}
else if( jogador2 > jogador1){
    console.log("O jogador 2 marcou ponto!")
    placar = jogador2 > jogador1
}
else if( jogador1 == jogador2){
    console.log("O jogo está empatado!")
};
//

// switch case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("O jogador 1 ganhou!")
        break;
    case placar = jogador2 > jogador1:
        console.log("O jogador 2 ganhou!")
        break;
    default:
        console.log("Ningúem ganhou!")
}


let array = [1, 2, 3, 4, 5, 6];
let object = {
    valor1: 1,
    valor2: 2,
    valor3: 3,
};

for(let i = 0; i < array.length; i++){
    console.log(i)
}

for(i in array){
    console.log(i)
}

for(i in object){
    console.log(i)
}

for(i of array){
    console.log(i)
}

//NAO TEM COMO USAR FOR OF EM OBJETOS

var a = 1

while(a <= 10){
    console.log(a)
    a++
}


do{
    console.log(a)
    a++
} while(a <= 10)


