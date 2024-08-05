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
const prompt = promptSync();

for(var i: number = 0; i < 5; i++) {
    const peso: number = parseInt (prompt("Digite o peso do aluno: "));
    
}