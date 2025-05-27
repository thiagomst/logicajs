console.log(">>> Executando o arquivo correto: atividades.js");

const readline = require('readline-sync');

// 1) Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"

function atividade1() {
  let olaMundo = "Olá, Mundo!";
  console.log(olaMundo);
}

// 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas
// para ela:
// Ex:
// Qual é o seu nome? João da Silva
// Olá João da Silva, é um prazer te conhecer!

function atividade2() {
  let nome = readline.question("Digite aqui o seu nome: ");
  console.log(`Olá ${nome}, seja bem-vindo(a) a esta lista de atividades.`);
}

// 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

function atividade3(){
    let nome = readline.question('Digiete aqui o seu nome: ')
    let salario = 1850.45
    console.log(`O funcionario ${nome} tem um salario de ${salario} em junho `) 
}

// 4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
// entre eles.
// Ex:
// Digite um valor: 8
// Digite outro valor: 5
// A soma entre 8 e 5 é igual a 13.

function atividade4(){
  let numero1 = readline.question('Digite aqui um número: ')
  let numero2 = readline.question('Digite aqui um segundo número: ')
  numero1 = parseInt(numero1, 10)
  numero2 = parseInt(numero2, 10)

  if(isNaN (numero1) || isNaN (numero2)){
    console.log('Erro: Digiete apenas números inteiros válidos. ')
    return;
  }

  let result = numero1 + numero2 

  console.log(`A soma entre Número ${numero1} e ${numero2} é ${result}`)
  
}

// 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

function atividade5(){
  let nota1 = readline.question('Digite aqui a primeira nota: ')
  let nota2 = readline.question('Digite aqui a segunda nota: ')
  nota1 = parseFloat(nota1)
  nota2 = parseFloat(nota2)

  if(isNaN(nota1) || isNaN(nota2)){
    console.log('Erro: Digite apenas números válidos para as notas.')
  }

  let media = (nota1 + nota2) / 2

  console.log(`A media entre nota ${nota1} e nota ${nota2} é igual a ${media}`)
}

// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

function atividade6() {
    let numero1 = readline.question('Digite aqui um número: ');

    numero1 = parseInt(numero1);
    if (isNaN(numero1)) {
        console.log("Digite um número válido.");
        return;
    }

    console.log(`O antecessor de ${numero1} é ${numero1 - 1} e o sucessor de ${numero1} é ${numero1 + 1}`);
}

// 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a 
// sua terça parte.
// Ex: 
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

function atividade7(){
    let numero = readline.question('Digite um número real: ');
    numero = parseFloat(numero);

    if(isNaN(numero)){
        console.log('Digite um número válido.');
        return;
    }

    let dobro = numero * 2;
    let tercaParte = numero / 3;

    console.log(`O dobro de ${numero} é ${dobro} e a terça parte de ${numero} é ${tercaParte}`);
}

// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores 
// relativos em outras medidas.
// Ex: 
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

function atividade8() {
  let distancia = readline.question('Digite uma distância em metros: ');
  distancia = distancia.replace(',', '.');
  distancia = parseFloat(distancia);

  if (isNaN(distancia)) {
    console.log('Erro: Digite uma medida válida.');
    return;
  }

  console.log(`A distância de ${distancia}m corresponde a:`);
  console.log(`${(distancia / 1000).toFixed(5)} Km`);
  console.log(`${(distancia / 100).toFixed(4)} Hm`);
  console.log(`${(distancia / 10).toFixed(3)} Dam`);
  console.log(`${(distancia * 10).toFixed(1)} dm`);
  console.log(`${(distancia * 100).toFixed(1)} cm`);
  console.log(`${(distancia * 1000).toFixed(1)} mm`);
}

// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

function atividade9(){
  let real = readline.question('Digite quantos Reais você tem na carteira: ');
  real = real.replace(',', '.');
  real = parseFloat(real);

  if(isNaN(real)){
    console.log('Erro: Digite um valor de Reais válido.');
    return;
  }

  let dolar = 3.45;
  let resultado = real / dolar;

  console.log(`Você tem R$${real.toFixed(2)} Reias que podem ser convertidos em US$${resultado.toFixed(2)} Dólares`);
}


function atividade10(){
  let largura = readline.question("Informe a largura da parede (em metros): ");
  let altura = readline.question("Informe a altura da parede (em metros): ");

  largura = largura.replace(',', '.');
  altura = altura.replace(',', '.');

  largura = parseFloat(largura);
  altura = parseFloat(altura);

  if (isNaN(largura) || isNaN(altura)) {
    console.log('Erro: Digite valores numéricos válidos para largura e altura.');
    return;
  }

  // Cálculo da área e tinta
  let area = largura * altura;
  let tintaNecessaria = area / 2;

  // Saída
  console.log(`A área da parede é ${area.toFixed(2)} m².`);
  console.log(`Você vai precisar de aproximadamente ${tintaNecessaria.toFixed(2)} litro(s) de tinta.`);
}







console.log(">>> Escolha a atividade (1 a 18): ");
let escolha = readline.questionInt("> ");

switch (escolha) {
  case 1: atividade1(); break;
  case 2: atividade2(); break;
  case 3: atividade3(); break;
  case 4: atividade4(); break;
  case 5: atividade5(); break;
  case 6: atividade6(); break;
  case 7: atividade7(); break;
  case 8: atividade8(); break;
  case 9: atividade9(); break;
  case 10: atividade10(); break;
  case 11: atividade11(); break;
  case 12: atividade12(); break;
  case 13: atividade13(); break;
  case 14: atividade14(); break;
  case 15: atividade15(); break;
  case 16: atividade16(); break;
  case 17: atividade17(); break;
  case 18: atividade18(); break;

  default: console.log("Opção inválida.");
}

//val km = media / 1000
//    println("${media} em KM é ${km}")
//    val hm = media / 100
//    println("${media} em Hm é ${hm}")
//    val dam = media / 10
//    println("${media} em Dam é ${dam}")
//    val dm = media * 10
//    println("${media} em Dm é ${dm}")
//    val cm = media * 100
//    println("${media} em Cm é ${cm}")
//    val mm = media * 1000
//    println("${media} em mm é ${mm}")