import promptSync from 'prompt-sync';

///Primeiro log
// const mensagem: string = "Olá, Mundo!";
// console.log(mensagem);

///Segundo log number
// var resultado: number
// var numero1: number = 10
// var numero2: number = 5
// resultado = numero1 + numero2
// console.log(`O resultado é ${resultado}`)

///Terceiro log prompt
// var prompt = promptSync();
// var numero1 = prompt('Digite o primeiro número: ');
// var numero2 = prompt('Digite o segundo número: ');
// var resultado = parseInt(numero1) + parseInt(numero2);
// console.log(`O resultado é ${resultado}`);

///Quarto log if e else
// var prompt = promptSync();
// var nota = parseFloat(prompt('Digite a nota do(a) aluno(a): '));
// if (nota >= 0 && nota <= 10){
//     if(nota >= 6){
//         console.log('Aprovado!');
//     } else {
//         console.log('Reprovado!');
//     }
// } else {
//     console.log('Nota inválida!');
// }

///Quinto log if e else
// var prompt = promptSync();
// var numero1 = parseFloat(prompt('Digite um número: '));
// var numero2 = parseFloat(prompt('Digite outro número: '));
// if(numero1 > numero2){
//     console.log('O maior número é: ' + numero1);
// } else {
//     console.log('O maior número é: ' + numero2);
// }

///Sexto log if e else
// var prompt = promptSync();
// var numero1 = parseFloat(prompt('Digite o primeiro número: '));
// var numero2 = parseFloat(prompt('Digite o segundo número: '));
// var numero3 = parseFloat(prompt('Digite o terceiro número: '));
// if(numero1 > numero2 && numero1 > numero3){
//     console.log('O maior número é: ' + numero1);
// } else {
//     if (numero2 > numero1 && numero2 > numero3){
//     console.log('O maior número é: ' + numero2);
//     } else {
//         if (numero3 > numero1 && numero3 > numero2){
//             console.log('O maior número é: ' + numero3);
//         } else {
//             console.log('Todos os números são iguais!');
//         }
//     }
// }

///Sétimo log elseif
// var prompt = promptSync();
// var numero1 = parseFloat(prompt('Digite o primeiro número: '));
// var numero2 = parseFloat(prompt('Digite o segundo número: '));
// var numero3 = parseFloat(prompt('Digite o terceiro número: '));
// if(numero1 > numero2 && numero1 > numero3){
//     console.log('O maior número é: ' + numero1);
// } else if (numero2 > numero1 && numero2 > numero3){
//     console.log('O maior número é: ' + numero2);
// } else if (numero3 > numero1 && numero3 > numero2){
//     console.log('O maior número é: ' + numero3);
// } else {
//     console.log('Todos os números são iguais!');
// }

//Oitavo log media artmetica
// var prompt = promptSync();
// var nota1 = parseFloat(prompt('Digite a primeira nota: '));
// var nota2 = parseFloat(prompt('Digite a segunda nota: '));
// var nota3 = parseFloat(prompt('Digite a terceira nota: '));
// var nota4 = parseFloat(prompt('Digite a quarta nota: '));
// var media = (nota1 + nota2 + nota3 + nota4) / 4;

// if (media >= 7){
//     console.log('Aprovado!');
// } else {
//     var notaRecuperacao = parseFloat(prompt('Digite a nota da recuperação: '));
//     if (notaRecuperacao >= 7){
//         console.log('Aprovado na recuperação!');
//     } else {
//         console.log('Reprovado!');
//     }
// }

///Nono log trocar valores de duas variaveis
// var a: number = 10;
// var b: number = 20;
// var c: number;

// c = a;
// a = b;
// b = c;

// console.log(`O valor de a é: ${a}`);
// console.log(`O valor de b é: ${b}`);
// console.log(`O valor de c é: ${c}`);

///Décimo log incremento, decremento e manipulação de variáveis
// var a: number = 10;
// var b: number = 8;
// a = a + 1;
// console.log(`O valor de a é: ${a}`); //11
// b = a + 1;
// console.log(`O valor de b é: ${b}`); //12
// a = a + b;
// console.log(`O valor de a é: ${a}`); //23
// b = a - b + 1;
// console.log(`O valor de b é: ${b}`); //12
// a = b + 1 + a;
// console.log(`O valor de a é: ${a}`); //36