const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on("connect", (connect) => {
    console.log("You're Connected!");
  });

  conn.on("connect", () => {
    conn.write("Name: WFH")
  });
  
  // conn.on("connect", () => {

  //   // setInterval(() => {
  //   //   conn.write("Move: up");
  //   // }, 50);
    
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 50);

  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 100);

  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 150);

  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   }, 200);
  // });
  


  conn.on("data", (data) => {
    console.log("Message from server: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};