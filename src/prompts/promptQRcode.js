import chalk from "chalk";

const promptQRcode = [
    {
        name : "link",
        description : chalk.yellow("Digite o link para gerar o Qrcode: "),
    },
    {
        name : "type",
        description : chalk.yellow("Escolha entre o tipo de QRcode (1 - Normal ou 2 - Terminal"),
        pattern : /^[1-2]+$/,
        message : chalk.red.italic("Escolha apenas entre 1 e 2"),
        require : true
    }
]

export default promptQRcode