const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.2.168',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.addListener('data', data => {
    console.log('Server say: ', data);
  });

  return conn;
}

console.log('Connecting ...');
connect();