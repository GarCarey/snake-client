const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.2.168',
    port: 50541
  });

  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting ...');
connect();