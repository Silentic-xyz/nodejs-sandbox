const express = require('express');
const bp = require('body-parser');
const {VM} = require("vm2");
const app = express();

app.use(bp.json());

app.post('/', (req, res) => {
  let code = req.body['code'];
  console.log(req.body);
  let vm = new VM();
  vm.timeout = 1000*5;
  let out = vm.run(code);
  res.send(out);
});
app.get('/', (req, res) => {
  res.send(`<h1>Silentic.xyz API : Node.JS Sandbox</h1>
  <hr>
  <h3>How to use:</h3>
  <p>POST to <a href='https://silentic-nodejs-sandbox.herokuapp.com/'>silentic-nodejs-sandbox.herokuapp.com</a> with body {"code": "Ur code"}
  <br>
  Don't forget to set Content-Type to application/json in headers</p>`);
});

app.listen( process.env.PORT || 3000 );