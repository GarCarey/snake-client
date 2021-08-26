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

  if (moves[input]) {
    connection.write(moves[input]);
  } else if (outputs[input]) {
    connection.write(outputs[input]);
  }
};

//module being exported to play file
module.exports = { setupInput };