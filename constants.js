const IP = 'localhost';
const PORT =  50541;

//object of inputs to control the snake
const moves = {
  w: 'Move: up',
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

//object of inputs that will be printed
const outputs = {
  z: 'Say: Keep going',
  x: 'Say: New High Score!'
}

//values and objects being exported to input and client files
module.exports = {
  IP,
  PORT,
  moves,
  outputs
};