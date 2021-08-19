const { connect } = require('./client');

console.log('Connecting ...');
connect();

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = (input) => {
  if (input === '\u0003'){
    process.exit();
  }
};