// Rodar o 'npm i'
// Para rodar o código insira no terminal o comando: 'npm run start:dev'

import prompt from "prompt"

import mainPrompt from "./prompts/promptMain.js"

import createQRcode from "./services/qrcode/create.js"
import createPassword from "./services/password/create.js"

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) await createQRcode()
        if(choose.select == 2) await createPassword()
    })

    prompt.start()
}

main()
