const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  conn.on("connect", (connect) => {
    console.log("You're Connected!");
  });

  conn.on("connect", () => {
    conn.write("Name: WFH")
  });
  
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