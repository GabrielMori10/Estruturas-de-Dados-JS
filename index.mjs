import { start1 } from "./Arrays/1-add-&-remover.mjs";

import { Chalk } from 'chalk';
const chalk = new Chalk({ level: 3 });

function logTitle(text) {
    console.log(chalk.bold.italic.rgb(255, 0, 110)("------------------------------------------------------------------------------------------------------------------"));
    console.log(chalk.bold.italic.rgb(255, 0, 110)(text));
    console.log(chalk.bold.italic.rgb(255, 0, 110)("------------------------------------------------------------------------------------------------------------------"));
}

logTitle("1. ADICIONAR E REMOVER");
start1();