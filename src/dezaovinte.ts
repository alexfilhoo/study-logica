import promptSync from 'prompt-sync';

///Decimo primeiro log ifs encadeados
// var prompt = promptSync();
// var numero = parseFloat(prompt('Digite um número: '));
// var pontos: number

// if (numero >= 8) {
//     if (numero >= 15) {
//         pontos = 5
//     } else {
//         pontos = 10
//     }
// } else {
//     if (numero >= 5) {
//         pontos = 50
//     } else {
//         pontos = 30
//     }
// }
// console.log(`Você ganhou ${pontos} pontos`)

///Decimo primeiro log ifs encadeados
// var prompt = promptSync();
// var numero = parseFloat(prompt('Digite um número: '));
// var pontos: number
// if (numero >= 8) {
//     if (numero >= 15) {
//         if (numero >= 20) {
//             pontos = 5
//         } else {
//             pontos = 30
//         }
//     } else {
//         if (numero >= 12) {
//             pontos = 80
//         } else {
//             pontos = 100
//         }
//     }
// } else {
//     if (numero >= 5) {
//         if (numero >= 6) {
//             pontos = 10
//         } else {
//             pontos = 25
//         }
//     } else {
//         if (numero >= 1) {
//             pontos = 20
//         } else {
//             pontos = 50
//         }
//     }
// }
// console.log(`Você ganhou ${pontos} pontos`)

///Decimo segundo log calculadora
// var prompt = promptSync();
// var numero1 = parseFloat(prompt('Digite o primeiro número: '));
// var operador = prompt('Digite o operador ( + | - | * | / ): ');
// var numero2 = parseFloat(prompt('Digite o segundo número: '));
// var resultado: number | undefined
// if (operador == '+'){
//     resultado = numero1 + numero2
// } else if (operador == '-'){
//     resultado = numero1 - numero2
// } else if (operador == '*'){
//     resultado = numero1 * numero2
// } else if (operador == '/'){
//     resultado = numero1 / numero2
// }
// if (resultado == undefined){
//     console.log('Operador inválido')
// } else {
//     console.log(`O resultado é: ${resultado}`)
// }

///Decimo terceiro log manipulando strings e substrings
// const prompt = promptSync();
// const calculo = prompt('Digite o cálculo que você quer fazer: ');
// var posicaoOperador: number
// var numero1: number
// var numero2: number
// var resultado: number | undefined
// if (calculo.indexOf('*') >= 0) {
//     posicaoOperador = calculo.indexOf('*')
//     numero1 = parseFloat(calculo.substring(0, posicaoOperador))
//     numero2 = parseFloat(calculo.substring(posicaoOperador + 1))
//     resultado = numero1 * numero2
// } else if (calculo.indexOf('/') >= 0) {
//     posicaoOperador = calculo.indexOf('/')
//     numero1 = parseFloat(calculo.substring(0, posicaoOperador))
//     numero2 = parseFloat(calculo.substring(posicaoOperador + 1))
//     resultado = numero1 / numero2
// } else if (calculo.indexOf('+') >= 0) {
//     posicaoOperador = calculo.indexOf('+')
//     numero1 = parseFloat(calculo.substring(0, posicaoOperador))
//     numero2 = parseFloat(calculo.substring(posicaoOperador + 1))
//     resultado = numero1 + numero2
// } else if (calculo.indexOf('-') >= 0) {
//     posicaoOperador = calculo.indexOf('-')
//     numero1 = parseFloat(calculo.substring(0, posicaoOperador))
//     numero2 = parseFloat(calculo.substring(posicaoOperador + 1))
//     resultado = numero1 - numero2}
// console.log(`O resultado é: ${resultado}`)

///Decimo quarto log exemplos if e else if
// const prompt = promptSync();
// const mes: number = parseFloat(prompt('Digite o número do mês: '));
// if (mes == 1){
//     console.log('Janeiro')
// } else if (mes == 2){
//     console.log('Fevereiro')
// } else if (mes == 3){
//     console.log('Março')
// } else if (mes == 4){
//     console.log('Abril')
// } else if (mes == 5){
//     console.log('Maio')
// } else if (mes == 6){
//     console.log('Junho')
// } else if (mes == 7){
//     console.log('Julho')
// } else if (mes == 8){
//     console.log('Agosto')
// } else if (mes == 9){
//     console.log('Setembro')
// } else if (mes == 10){
//     console.log('Outubro')
// } else if (mes == 11){
//     console.log('Novembro')
// } else if (mes == 12){
//     console.log('Dezembro')
// }

///Decimo quinto log calculadora idade
// const prompt = promptSync();
// const dia = parseInt(prompt('Digite o dia de nascimento: '));
// const mes = parseInt(prompt('Digite o mês de nascimento: '));
// const ano = parseInt(prompt('Digite o ano de nascimento: '));
// const hoje: Date = new Date();
// const diaHoje = hoje.getDate();
// const mesHoje = hoje.getMonth();
// const anoHoje = hoje.getFullYear();
// var idade: number = anoHoje - ano;
// if (mes > mesHoje){
//     idade -= 1;
// } else if (mes == mesHoje) {
//     if (dia > diaHoje){
//         idade -= 1;
//     }
// }
// console.log(`Você tem ${idade} anos`);

///Decimo sexto log jogo par ou ímpar
// const prompt = promptSync();
// const escolhaPrimeiroJogador = prompt('Jogador 1, você quer par ou impar? ');
// const numeroPrimeiroJogador = parseInt(prompt('Jogador 1, escolha um número: '));
// const numeroSegundoJogador = parseInt(prompt('Jogador 2, escolha um número: '));
// const soma = numeroPrimeiroJogador + numeroSegundoJogador;
// const resultado = soma % 2;
// if (escolhaPrimeiroJogador == 'par' && resultado == 0){
//     console.log('Jogador 1 ganhou!');
// } else if (escolhaPrimeiroJogador == 'impar' || 'ímpar' && resultado != 0){
//     console.log('Jogador 1 ganhou!');
// } else {
//     console.log('Jogador 2 ganhou!');
// }

///Decimo sétimo log jogo 2 ou 1 com if
// const prompt = promptSync();
// const jogador1: number = parseInt(prompt('Número do jogador 1: '));
// const jogador2: number = parseInt(prompt('Número do jogador 2: '));
// const jogador3: number = parseInt(prompt('Número do jogador 3: '));
// if ((jogador1 == 1 || jogador1 == 2) && (jogador2 == 1 || jogador2 == 2) && (jogador3 == 1 || jogador3 == 2)){
// if (jogador1 != jogador2 && jogador1 != jogador3){
//     console.log('Jogador 1 ganhou!');
// } else if (jogador2 != jogador1 && jogador2 != jogador3){
//     console.log('Jogador 2 ganhou!');
// } else if (jogador3 != jogador1 && jogador3 != jogador2){
//     console.log('Jogador 3 ganhou!');
// } else {
//     console.log('Empate!');
// }
// } else {
//     console.log('Número inválido!');
// }

///Decimo oitavo log estrutura de repetição while
// const prompt = promptSync();
// var contador: number = 1
// while (contador <= 10){
// 	var numero: number = parseInt(prompt('Digite um número: '));
// 	console.log(numero)
//     contador += 1
// }
// console.log('Fim do programa')

///Decimo nono log estrutura de repetição while 0 a 100
//- var prompt = promptSync();
//- var contador: number = parseInt(prompt('Digite um número: '));
// var contador: number = 0
// while (contador <= 100){
//     console.log(contador)
//     contador += 1
// }

///Vigésimo log estrutura de repetição while 0 a 100 pares
// var contador: number = 0
// while (contador <= 100){
//     if (contador % 2 == 0){
//         console.log(contador)
//     }
//     contador += 1
// }