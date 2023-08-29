
# HTML, CSS & JavaScript - DIO

Repositório para que eu possa deixar os estudos de HTML e CSS salvos, caso haja alguma dúvida.
#
:construction: Projeto em construção :construction:

# 
### Ferramentas usadas para fazer este README:
[Github](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[Medium](https://raullesteves.medium.com/github-como-fazer-um-readme-md-bonitão-c85c8f154f8)

[Alura](https://www.alura.com.br/artigos/escrever-bom-readme)

# 
## HTML5

 - Em caso de uso de uma tag âncora - <a>, podemos utilizar o href, que irá nos mandar para a página da âncora utilizando a mesma guia em que estamos. Caso seja necessário abrir uma nova guia, podemos utilizar o comando <target>, para que eles nos mande para a página âncorada porém em uma nova guia.ㅤ

 ```
 <a href="https://www.lipsum.com" target="_blank">
 ```

 # 


- Em caso de e-mail ou telefone podemos usar um prefixo na tag <a>.

```
<a href="mailto:berezanskyj16@gmail.com">
<a href="tel:+5551999999999">
```
# 

- No caso do uso de listas, temos dois tipo: 
```
<ul> Quando não importa a ordem da lista.
Exemplo:
• Twitter
• Instagram
• Facebook
```
```
<ol> Quando importa a ordem da lista.
Exemplo:
1. Twitter
2. Instagram
3. Facebook
```
# 

## Java Script
Dentro dos arrays no JS temos alguns metodos para manipula-los:


- forEach() - Itera um array;

- push() - adiciona item no final do array;

- pop() - remove item no final do array;

- shift() - remove item no inicio do array;

- unshift() - adiciona item no inciio do array;

- indexOF() - retorna o indice de um valor;

- splice() - remove ou substitui um item pelo indice;

- slice() - retorna uma parte de um array existente;

## Exemplos
```
forEach():
const numbers = [1, 2, 3]; 
numbers.forEach(num => console.log(num))

Retorno:
1
2
3
```
```
push():
const fruits = ['apple', 'banana']; 
fruits.push('orange');
console.log(fruits);

Retorno:
[ 'apple', 'banana', 'orange' ]
```
```
pop():
const colors = ['red', 'blue', 'green'];
const removedColor = colors.pop();
console.log(removedColor);

Retorno:
[ 'red', 'blue' ]
```
```
shift():
const animals = ['dog', 'cat', 'rabbit'];
const shiftedAnimal = animals.shift();
console.log(animals);

Retorno:
[ 'cat', 'rabbit' ]
```
```
unshift():
const cities = ['Paris', 'London']; 
const cidade = cities.unshift('New York');
console.log(cities);

Retorno:
[ 'New York', 'Paris', 'London' ]
```
```
indexOF():
const names = ['Alice', 'Bob', 'Charlie'];
const index = names.indexOf('Bob');
console.log(index);

Retorno:
1
```
```
splice():
const numbers = [10, 20, 30, 40, 50];
const removed = numbers.splice(1, 2);
console.log(numbers)

Retorno:
[ 10, 40, 50 ]
```
```
slice():
const newColors = ['red', 'green', 'blue'];
const slicedColors = colors.slice(1, 3);
console.log(newColors);

Retorno:
[ 'red', 'green', 'blue' ]
```

## Funções
Dentro do JavaScript temos funções declarativas e não declarativas.



### Funções declarativas
- Funções declarativas necessáriamente PRECISAM ter um nome.
```
function mensagem(){
    console.log('Essa mensagem veio de uma função')
};

mensagem();
```

### Expressões de funções
- Expressões de funções não necessáriamente precisam ser um nome, pois com a sua chamada o próprio JavaScript entende que estamos chamando uma expressão de função.

```
Com nomeação:

var mensagem = function mensagem(){
    console.log('Essa mensagem veio de uma função')
};


mensagem();
```

```
Sem nomeação:

var mensagem = function(){
    console.log('Essa mensagem veio de uma função')
};


mensagem();
```

### Arrow function
- São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"

```
var mensagem = () => {
    console.log('Essa mensagem veio de uma função')
};


mensagem();
```
