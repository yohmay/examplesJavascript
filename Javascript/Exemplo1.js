let produtos = 10;
let quantidade = 15;
let total = 0;
let nome = "Alex Fernando";
let sobrenome = " Egidio";
let idade = 31;

function exemplo(nome,sobrenome) {
    total = ((produtos * quantidade) * 5);
    console.log(total);

    if (idade == 31) {
        console.log(nome);
    }
    idade = 33;
    if (idade == 33) {
        sobrenome = "Egidio";
        console.log(sobrenome);
    }
}
exemplo(nome,sobrenome);