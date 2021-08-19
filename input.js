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
  if (input === 'w'){
    connection.write('Move: up');
  } else if (input === 's') {
    connection.write('Move: down');
  } else if (input === 'a') {
    connection.write('Move: left');
  } else if (input === 'd') {
    connection.write('Move: right');
  }

  if (input === '1') {
    console.log('Keep going');
  } else if (input === '2') {
    console.log('New High Score!');
  }
};

module.exports = { setupInput };