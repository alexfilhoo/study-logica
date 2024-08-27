import promptSync from 'prompt-sync';

///trigesimo primeiro contador de palavras
// var prompt = promptSync();
// let frase: string = prompt('Digite uma frase: ');
// console.log("O texto tem ", frase.length, "caracteres");
// var posicaoEspaco: number = 0;
// var contadorEspaco: number = 0;

// do {
//     posicaoEspaco = frase.indexOf(" ", posicaoEspaco + 1)
//     if (posicaoEspaco >= 0) {
//         contadorEspaco++;
//     }
// } while (posicaoEspaco != -1);
// console.log("O texto tem ", contadorEspaco + 1, "palavras");

///function
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// greet("Alex", new Date());

///forEach
// const names = ["Alice", "Bob", "Eve"];

// names.forEach((s) => {
//     console.log(s.toUpperCase());
//   });

// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 3, y: 7 });

/// trigesimo segundo vetor ou matriz
// var vetor: number[] = [1, 2, 3, 4, 5, 30, 70];
// vetor[0] = 13
// vetor.push(10);
// console.log(vetor);

// var matriz: number[][] = [[],[]];
// matriz[0][0] = 10;
// matriz[0][1] = 15;
// matriz[1][0] = 30;
// matriz[1][1] = 35;
// matriz.push([10, 20]);
// matriz[2].push(80);

// console.log(matriz);

// for (var i:number = 0; i < vetor.length; i++) {
//     console.log(vetor[i]);
// }

///trigesimo terceiro imprimindo matrizes
// for (var hora: number = 0; hora < 24; hora++) {
//     for (var minuto: number = 0; minuto < 60; minuto++) {
//             console.log(hora + ":" + minuto);
//     }
// }

///trigesimo quarto operacoes vetores
// const prompt = promptSync();

// const totalAlunos: number = 5;

// var pesosAlunos: number[] = [];

// var somaPeso: number = 0;

// for(var i: number = 0; i < totalAlunos; i++) {
//     const peso: number = parseInt (prompt("Digite o peso do aluno: "));
//     pesosAlunos[i] = peso;
//     somaPeso += peso;
// }

// const media: number = somaPeso / totalAlunos;

// for(var i: number = 0; i < totalAlunos; i++) {
//     if (pesosAlunos[i] > media) {
//     console.log(`Mensagem enviada para o(a) aluno(a) com peso: ${pesosAlunos[i]} kg`);
//     }
// }

// console.log("O peso médio dos alunos da academia é: ", media);

// console.log(pesosAlunos);

///trigesimo quinto como trocar valores dentro de um vetor
// const vetor: number[] = [60, 80, 70, 90, 120];
// console.log("Antes", vetor);
// const primeiroValor: number = vetor[0];
// for(var i: number = 0; i < vetor.length - 1; i++) {
//     vetor[i] = vetor[i + 1];
// }
// vetor[vetor.length - 1] = primeiroValor;
// console.log("Depois", vetor);

///trigesimo sexto busca linear em vetor
// const prompt = promptSync();

// const vetor: number[] = [43, 23, 54, 67, 12, 10, 90];

// const numero: number = parseInt(prompt("Digite um número para buscar no vetor: "));

// for (var i: number = 0; i < vetor.length; i++) {
//     var valor: number = vetor[i];
//     if (valor == numero) {
//         console.log("Número encontrado na posição: ", i);
//         break;
//     } else if (i == vetor.length - 1) {
//         console.log("Número não encontrado no vetor");
//     }
// }

///trigesimo setimo ler 3 maiores valores digitados
// const prompt = promptSync();
// var notas: number[] = [];
// for(var i: number = 0; i < 10; i++) {
//     var nota: number = parseFloat(prompt("Digite a nota do aluno: "));
//     notas.push(nota);
// }
// var maiorNota: number = 0;
// var posicaoMaiorNota: number = 0;
// for (var i: number = 0; i < 3; i++) {
//     for (var j: number = 0; j < notas.length; j++) {
//         if (notas[j] > maiorNota) {
//             maiorNota = notas[j];
//             posicaoMaiorNota = j;
//         }
//     }
//     console.log("A ", i + 1, "ª maior nota é: ", maiorNota);
//     notas.splice(posicaoMaiorNota, 1);
// }

///trigesimo oitavo
var cliente = {
    nome: "João",
    cpf: "123.456.789-00",
    telefone: "(11)91234-5678",
    idade: 25,
    endereco: {
        rua: "Rua 1",
        numero: 123,
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP"
    }
}

console.log(cliente.cpf);