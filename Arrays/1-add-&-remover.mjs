import chalk from "chalk";

function logTitle(text) {
    console.log("");
    console.log(chalk.magenta(chalk.bold(text)));
}

function logSubtitle(text) {
    console.log("");
    console.log(chalk.red(chalk.underline(text)));
}

function logComment(text) {
    console.log(chalk.grey(chalk.italic(text)));
}

export function start1() {
    logTitle("ADICIONAR");

    // push
    logSubtitle(`Para adicionarmos novos itens no ${chalk.bold("final")} de uma array, utilizamos o ${chalk.bold(".push")}.`);

    logComment("Antes do push");
    let frutas = ["Maçã", "Uva", "Morango"];
    console.log(frutas);

    logComment("Depois do push");
    frutas.push("Banana");
    console.log(frutas);

    // unshift
    logSubtitle(`Para adicionarmos novos itens no ${chalk.bold("início")} de uma array, utilizamos o ${chalk.bold(".unshift")}.`);

    logComment("Antes do unshift");
    frutas = ['Maçã', "Uva", "Morango"];
    console.log(frutas);

    logComment("Depois do unshift");
    frutas.unshift("Banana");
    console.log(frutas);



    logTitle("REMOVER");

    // pop
    logSubtitle(`Agora, para remover um item no ${chalk.bold("final")} de uma array, utilizamos o ${chalk.bold(".pop")}.`);

    logComment("Antes do pop");
    frutas = ['Maçã', "Uva", "Morango"];
    console.log(frutas);

    logComment("Depois do pop");
    frutas.pop();
    console.log(frutas);

    // shift
    logSubtitle(`Agora, para remover um item no ${chalk.bold("início")} de uma array, utilizamos o ${chalk.bold(".shift")}.`);

    logComment("Antes do shift");
    frutas = ['Maçã', "Uva", "Morango"];
    console.log(frutas);

    logComment("Depois do shift");
    frutas.shift();
    console.log(frutas);



    logTitle("SEPARAR");

    // slice
    logSubtitle(`O ${chalk.bold(".slice")} retorna uma parte "cortada" de uma array. Seus parâmetros são índices da array, que representam o ${chalk.bold("início")} e ${chalk.bold("fim")} do ${chalk.bold("\"corte\"")}.`);

    logComment("Antes do slice");
    let numeros = [0, 1, 2, 3];
    console.log(numeros);

    logComment("Depois do slice [Parâmetros: (1, 3)]");
    numeros = numeros.slice(1, 3);
    console.log(numeros);
    logComment("LEMBRE-SE: O slice retorna uma nova array, mas não muda sua variável com a array atual, ou seja, será necessário fazer o comando \"array = array.slice()\" para que sua variável mude");

    // splice
    logSubtitle(`O ${chalk.bold(".splice")} cria uma array com parte dela substituída por novos elementos. Seus parâmetros são índices da array, que representam o ${chalk.bold("início")} e ${chalk.bold("fim")} da ${chalk.bold("parte que será substituída")}, seguidos pelos ${chalk.bold("novos elementos")}.`);

    logComment("Antes do splice");
    numeros = [0, 1, 2, 3];
    console.log(numeros);

    logComment("Depois do splice [Parâmetros: (1, 2, \"Sumiu\")]");
    numeros.splice(2, 4, "Sumiu");
    console.log(numeros);
    logComment("DICA: O splice retorna os itens removidos da sua array (\"itensRemovidos = array.splice()\")");
}