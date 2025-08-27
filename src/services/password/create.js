import chalk from "chalk";
import handle from "./handle.js";

async function create() {
    console.log(chalk.green("password"))

    const password = await handle()

    console.log(password)

}

export default create
