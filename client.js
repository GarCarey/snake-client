const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: GLC");
    //conn.write("Move: up");
  });

  conn.addListener('data', data => {
    console.log('Server say: ', data);
  });

  return conn;
}

module.exports = { connect };