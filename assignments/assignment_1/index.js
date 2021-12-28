function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const process = require('process');
    const args = process.argv;
    ans = args[args.length-1]
    return ans

}

function getNameFromEnv() {
    // Write your code here
    process.env.name = "Yash";
    return process.env.name;
}

function getNameFromReadLine() {
    // Write your code here
    var readline = require('readline');
    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("What is your name? ",(name)=>{
        console.log(name);
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}