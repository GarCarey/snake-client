const args = process.argv.slice(2);
const net = require('net');
const { IP, PORT } = require('./constants');

//function that creates a connection to the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  //function that prints we have connected to the game in the server and writes our
  // initals above the snake when we connect
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${args}`);
  });

  //prints out data return from the game server after specific actions 
  // IE dying in the game
  conn.addListener('data', data => {
    console.log('Server say: ', data);
  });

  return conn;
}

//function being export to Play file
module.exports = { connect };