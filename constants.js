const IP = '192.168.2.168';
const PORT =  50541;

const moves = {
  w: 'Move: up',
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

const outputs = {
  z: 'Keep going',
  x: 'New High Score!'
}

module.exports = {
  IP,
  PORT,
  moves,
  outputs
};