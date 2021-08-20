const { moves, outputs } = require('./constants');
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}

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

module.exports = { setupInput };