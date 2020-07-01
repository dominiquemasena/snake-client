const net = require('net');
const connect = function() {
  const conn  = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  console.log("connection created.")
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
  })
  conn.on("data", (data) => {
    console.log(data);
  })


  return conn;
};

connect();


module.exports = {connect}


