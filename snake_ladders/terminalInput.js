const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const takeInput = () => {
    return [
        () => rl.close(),
        function(inputMsg = '') {
            return new Promise((resolve) => {
                rl.question(inputMsg, (input) => {
                    resolve(input)
                })
            })
        }
    ]    
}

module.exports = {
    takeInput
}
