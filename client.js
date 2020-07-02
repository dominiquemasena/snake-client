const net = require('net');
const connect = function() {
  const conn  = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });

  conn.setEncoding('utf8'); 

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write('Name: DGM');
  });
  conn.on("data", (data) => {
    console.log(data);
  })


  return conn;
};


module.exports = {connect}




