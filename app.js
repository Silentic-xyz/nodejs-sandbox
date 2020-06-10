const express = require('express');
const bp = require('body-parser');
const {VM} = require("vm2");
const app = express();

app.use(bp.json());

app.post('/', (req, res) => {
  let code = req.body['code'];
  console.log(req.body);
  let vm = new VM();
  let out = vm.run(code);
  res.send(out);
});

app.listen(3002);