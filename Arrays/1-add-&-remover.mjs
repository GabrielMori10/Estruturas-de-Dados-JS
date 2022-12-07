import { Chalk } from 'chalk';
const chalk = new Chalk({ level: 3 });


function logTitle(text) {
    console.log("");
    console.log(chalk.bold.rgb(178, 0, 255)(`--->>> ${text} <<<---`));
}

function logSubtitle(title, text) {
    console.log("");
    console.log(`${chalk.bold.underline.rgb(72, 0, 255)(title + ":")} ${(text)}`);
}

function logSyntaxe(text) {
    console.log(`${chalk.bold.underline.rgb(33, 0, 127)("syntaxe:")} ${(text)}`);
}

function logComment(text) {
    console.log(chalk.grey(chalk.italic(text)));
}


export function start1() {
    logTitle("Adicionar");

    // push
    logSubtitle("> push", `Adiciona novos itens no ${chalk.bold("final")} de uma array`);

    logComment("Antes do push");
    let frutas = ["Maçã", "Uva", "Morango"];
    console.log(frutas);

    logComment("Depois do push");
    frutas.push("Banana");
    console.log(frutas);

    // unshift
    logSubtitle("> unshift", `Adiciona novos itens no ${chalk.bold("início")} de uma array.`);

    logComment("Antes do unshift");
    frutas = ['Maçã', "Uva", "Morango"];
    console.log(frutas);

    logComment("Depois do unshift");
    frutas.unshift("Banana");
    console.log(frutas);



    logTitle("Remover");

    // pop
    logSubtitle("> pop", `Remove o item no ${chalk.bold("final")} de uma array.`);

    logComment("Antes do pop");
    frutas = ['Maçã', "Uva", "Morango"];
    console.log(frutas);

    logComment("Depois do pop");
    frutas.pop();
    console.log(frutas);

    // shift
    logSubtitle("> shift", `Remove o item no ${chalk.bold("início")} de uma array.`);

    logComment("Antes do shift");
    frutas = ['Maçã', "Uva", "Morango"];
    console.log(frutas);

    logComment("Depois do shift");
    frutas.shift();
    console.log(frutas);



    logTitle("Separar");

    // slice
    logSubtitle("> slice", `Retorna uma uma nova array com parte da array original`);
    logSyntaxe(`array.slice(${chalk.rgb(0, 148, 255)("inícioDoSlice")}, ${chalk.rgb(0, 148, 255)("fimDoSlice")})`);

    logComment("Antes do slice");
    let numeros = [0, 1, 2, 3];
    console.log(numeros);

    logComment("Depois do slice [Parâmetros: (1, 3)]");
    numeros = numeros.slice(1, 3);
    console.log(numeros);
    logComment("LEMBRE-SE: O slice retorna uma nova array, mas não muda a array original. Será necessário, por exemplo, fazer o comando \"array = array.slice()\" para que a variável \"array\" mude.");

    // splice
    logSubtitle("> splice", `Substitui parte de uma array por novos elementos`);
    logSyntaxe(`array.splice(${chalk.rgb(0, 148, 255)("index")}, ${chalk.rgb(0, 148, 255)("quantidadeDeElementosDeletados")}, ${chalk.rgb(0, 148, 255)("novoElemento1")}, ${chalk.rgb(0, 148, 255)("novoElemento2")}, ...)`);

    logComment("Antes do splice");
    numeros = [0, 1, 2, 3];
    console.log(numeros);

    logComment("Depois do splice [Parâmetros: (1, 2, \"Sumiu\")]");
    numeros.splice(1, 2, "Sumiu");
    console.log(numeros);
    logComment("DICA: O splice retorna os itens removidos da sua array (\"itensRemovidos = array.splice()\")");
    logComment("DICA 2: O splice pode ser usado para escolher onde adicionar um novo item na array (\"array.splice(2, 0, \"Olá\")\" adiciona a string \"Olá\" no índice 2, sem remover nenhum elemento.)");
}