const express = require('express');
const bp = require('body-parser');
const {VM} = require("vm2");
const app = express();

app.use(bp.json());

app.post('/', (req, res) => {
  let code = req.body['code'];
  console.log(req.body);
  let vm = new VM();
  vm.sandbox
  vm.timeout = 1000*5;
  try{
    out = vm.run(code);
    res.send(out);
  } catch(err) {
    out = err.toString();
    res.send(out);
  }
});
app.get('/', (req, res) => {
  res.send(`<h1>Silentic.xyz API : Node.JS Sandbox</h1>
  <hr>
  <h3>How to use:</h3>
  <p>POST to <a href='https://silentic-nodejs-sandbox.herokuapp.com/'>silentic-nodejs-sandbox.herokuapp.com</a> with body {"code": "Ur code"}
  <br>
  Don't forget to set Content-Type to application/json in headers</p><hr><h3>Code examples:</h3><p>
Python 3+:</p>
<pre>
<span style='color:aquamarine'>import<span> requests

<i>data</i> = {<span style='color:bisque'>'code'</span>: <span style='color:bisque'>'"Hello, " + "World!"'</span>} <i style='color:dimgray'># Put ur code in data['code']</i>
<i>output</i> = requests.post(<span style='color:bisque'>'<a href="#">https://silentic-nodejs-sandbox.herokuapp.com/</a>'</span>, <i style='color:dimgray'># Making POST-request to https://silentic-nodejs-sandbox.herokuapp.com/</i>
              <span style='color:cadetblue'>data</span>=json.dumps(data),
              <span style='color:cadetblue'>headers</span>={<span style='color:bisque'>'Content-Type'</span>: <span style='color:bisque'>'application/json'</span>}) <i style='color:dimgray'># Don't forget to set "Content-Type" to "application/json" in headers</i>
<span style='color:darkseagreen'>print</span>(output.text) # "Hello, World!"
</pre>`);
});

app.listen( process.env.PORT || 3000 );