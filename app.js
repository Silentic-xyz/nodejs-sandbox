const express = require('express');
const bp = require('body-parser');
const {VM} = require("vm2");
const app = express();

app.use(bp.json());

app.post('/', (req, res) => {
  let code = req.body.code;
  let output = new VM().run(code);
  res.send(output);  
});

app.listen(3000);