public class Exemplo1{
    private static double total = 0;
    private static int prod = 10;
    private static int qtd = 15;
    private static String nome = "Alex Fernando";
    private static int idade = 31;

public static void main (String[]args){
    total = (prod * qtd)*5;
        System.out.println(total);
    if (idade == 31) {
        System.out.println(nome);
    }
    idade = 33;
    if (idade == 33) {
        nome += " Egidio";
        System.out.println(nome);
    }
}
}