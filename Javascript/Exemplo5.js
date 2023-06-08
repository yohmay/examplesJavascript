let Nota1 = 10;
let Nota2 = 9;
let Nota3 = 8;
let Nota4 = 7;

let Soma = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3) + parseFloat
    (Nota4));
let Media = Soma / 4;

console.log("Sua média é: " + Media);

if (Media < 7) {
    console.log("Estude mais para ser Aprovado!");
} else {
    console.log("Parabéns você foi Aprovado!!");
}