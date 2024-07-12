import promptSync from 'prompt-sync';

///Vigésimo primeiro log while numero primo
// var prompt = promptSync();
// const numero = parseFloat(prompt('Digite um número: '));
// while (numero >= 2) {
//     let primo = true;
//     for (let i = 2; i < numero; i++) {
//         if (numero % i == 0) {
//             primo = false;
//         }
//     }
//     if (primo) {
//         console.log(`O número ${numero} é primo`)
//     } else {
//         console.log(`O número ${numero} não é primo`)
//     } break;
// }

///Vigésimo segundo log for
// for (let contador = 1; contador <= 10; contador++) {
//     console.log(contador);
// }

///Vigésimo terceiro log for soma
// var prompt = promptSync();
// let numero: number
// let soma: number = 0;
// let continuar: string = ''
// for (let i = 1; ; i++) {
//     continuar = prompt('Deseja continuar? (S/N) ')
//     if (continuar == 'S' || continuar == 's') {
//         numero = parseFloat(prompt('Digite um número: '));
//         soma += numero;
//     } else {
//         console.log(`A soma dos números é ${soma}`)
//         break;
//     }
// }

///Vigésimo quarto log ler 10 numeros e imprimir o maior
// var prompt = promptSync();
// let numero: number
// let maior: number = 0;
// for (let i = 1; i <= 10; i++) {
//     numero = parseFloat(prompt('Digite um número: '));
//     if (numero > maior) {
//         maior = numero;
//     }
// }
// console.log(`O maior número é ${maior}`)

///Vigésimo quinto log ler notas e imprimir a média
// var prompt = promptSync();
// let nota: number
// let soma: number = 0;
// let media: number = 0
// let nome: string = ''
// let mediaAluno: number = 0
// for (let i = 0; ; i++) {
//     var aluno = prompt('Deseja digitar a nota de um aluno? (S/N) ')
//     if (aluno == 'S' || aluno == 's') {
//         nome = prompt('Digite o nome do aluno: ');
//         soma = 0
//         for (let index = 0; index <= 3; index++) {
//             nota = parseFloat(prompt('Digite a nota: '));
//             soma += nota;
//             mediaAluno = soma / 4
//             media += nota
//         }
//         console.log(`A média das notas do aluno ${nome} é ${mediaAluno.toFixed(2)}`)
//     } else {
//             console.log('A média das notas da turma é', (media / (i * 4)).toFixed(2))
//             break;
//     }
// }

///Vigésimo sexto log soma pares | impares | media
// var prompt = promptSync();
// let numero: number
// let somaPares: number = 0;
// let somaImpares: number = 0;
// let media: number = 0
// for (let i = 0; i <= 10; i++) {
//     numero = parseFloat(prompt('Digite um número: '));
//     if (numero % 2 == 0) {
//         somaPares += numero;
//     } else {
//         somaImpares += numero;
//     }
//     media = (somaPares + somaImpares) / 10
// }
// console.log(`A soma dos números pares é ${somaPares}`)
// console.log(`A soma dos números impares é ${somaImpares}`)
// console.log(`A média dos números é ${media}`)

///Vigésimo sétimo log manipulando strings
// var nome: string = 'Alex '
// //tamanho da string
// console.log(nome.length)
// //transforma em minuscula
// console.log(nome.toLowerCase())
// //transforma em maiuscula
// console.log(nome.toUpperCase())
// //retorna a primeira letra
// console.log(nome.charAt(0))
// //retorna a primeira letra minuscula
// console.log(nome.charAt(0).toLowerCase())
// //verifica se espaço existe
// console.log("Posição do espaço na palavra: ", nome.indexOf(' '))
// //pedaço da string
// var posicaoEspaco: number = nome.indexOf(' ')
// console.log('Pedaço da string', nome.substring(0, posicaoEspaco))
// var primeiroNome: string = 'Alex'
// var segundoNome: string = 'Filho'
// console.log(`${primeiroNome} ${segundoNome}`)

///Vigésimo oitavo log verificar se data é válida
// const prompt = promptSync();
// var data: string = prompt('Digite a data de nascimento: ');
// var posicaoBarra: number = data.indexOf('/');
// var posicaoBarra2: number = data.lastIndexOf('/');

// if (posicaoBarra >= 1 && posicaoBarra2 >= 3 && posicaoBarra != posicaoBarra2) {
//     var dia: number = parseInt(data.substring(0, posicaoBarra));
// var mes: number = parseInt(data.substring(posicaoBarra + 1, posicaoBarra2));
// var ano: number = parseInt(data.substring(posicaoBarra2 + 1));
// var maxDias: number = 31;
// switch (mes) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         maxDias = 31;
//         break;
//     case 2: 
//         if (ano % 4 == 0) {
//             maxDias = 29;
//         } else {
//             maxDias = 28;
//         }
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         maxDias = 30;
//         break;
//     }
//     if ((dia >= 1 && dia <= maxDias) && (mes >= 1 && mes <= 12) && (ano > 0)){
//         console.log('Data válida')
//     } else {
//         console.log('Data inválida')
//     }
// } else {
//     console.log('Digite a data no formato dd/mm/aaaa')
// }

///Vigésimo nono log verificar se email é válido
// const prompt = promptSync();
// var email: string = "alex@teste.com"
// if (email.indexOf('@') >= 1 && email.indexOf('.') >= 3 && email.indexOf('@') < email.indexOf('.')) {
//     console.log('Email válido')
// } else {
//     console.log('Email inválido')
// }

///Trigésimo log ensinar alfabeto
// const prompt = promptSync();
// var alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
// var posicaoLetraAtual: number = 0
// while(posicaoLetraAtual <= 25) {
//     var letra: string = prompt('Digite uma letra: ');
//     if (letra == alfabeto.charAt(posicaoLetraAtual)) {
//         console.log('Acertou')
//         posicaoLetraAtual++
//     } else {
//         console.log('Errou', alfabeto.charAt(posicaoLetraAtual))
//     }
// } 
// console.log('Parabéns, você acertou todas as letras do alfabeto')