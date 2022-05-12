const app = require("./index");

const connect = require("./config/db");



const port = 5000
app.listen(port, async function () {
  await connect();
  console.log(`listening on ${port}`);
});
