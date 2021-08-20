const { moves, outputs } = require('./constants');
let connection;

/**
 * Set up User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}

//function that tells us what to do with the inputs 
const handleUserInput = (input) => {
  if (input === '\u0003'){
    process.exit();
  }

  for (const key in moves) {
    if (key === input) {
      connection.write(moves[key]);
    }
  }

  for (const key in outputs) {
    if (key === input) {
      console.log(outputs[key]);
    }
  }
};

//module being exported to play file
module.exports = { setupInput };