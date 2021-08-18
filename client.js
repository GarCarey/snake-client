const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.2.168',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: GLC");
  });

  conn.addListener('data', data => {
    console.log('Server say: ', data);
  });

  return conn;
}

module.exports = { connect };