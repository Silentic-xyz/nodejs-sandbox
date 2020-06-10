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
<i style='color:dimgray'># requests module</i>
<span style='color:firebrick'>import</span> requests, json

<i>data</i> = {<span style='color:olive'>'code'</span>: <span style='color:olive'>'"Hello, " + "World!"'</span>} <i style='color:dimgray'># Put ur code in data['code']</i>
<i>output</i> = requests.<b style='color: DarkSlateBlue'>post</b>(<span style='color:olive'>'<a href="#" style='color:olive'>https://silentic-nodejs-sandbox.herokuapp.com/</a>'</span>, <i style='color:dimgray'># Making POST-request to https://silentic-nodejs-sandbox.herokuapp.com/</i>
              <span style='color:cadetblue'>data</span>=json.dumps(data),
              <span style='color:cadetblue'>headers</span>={<span style='color:olive'>'Content-Type'</span>: <span style='color:olive'>'application/json'</span>}) <i style='color:dimgray'># Don't forget to set "Content-Type" to "application/json" in headers</i>
<b style='color: DarkSlateBlue'>print</b>(<i>output</i>.text) # "Hello, World!"

<i style='color:dimgray'># aiohttp module</i>
<span style='color:firebrick'>import</span> aiohttp, asyncio, json

<span style='color:firebrick'>async def</span> runJSCode(code):
  <i>data</i> = {<span style='color:olive'>'code'</span>: <i>code</i>}
  <span style='color:firebrick'>async with</span> aiohttp.<b style='color: DarkSlateBlue'>ClientSession</b>() <span style='color:firebrick'>as</span> <i>session</i>:
    <span style='color:firebrick'>async with</span> session.<b style='color: DarkSlateBlue'>post</b>(<span style='color:olive'>'<a href="#" style='color:olive'>https://silentic-nodejs-sandbox.herokuapp.com/</a>'</span>,
        <span style='color:cadetblue'>data</span>=json.dumps(data),
        <span style='color:cadetblue'>headers</span>={<span style='color:olive'>'Content-Type'</span>: <span style='color:olive'>'application/json'</span>}) <span style='color:firebrick'>as</span> <i>resp</i>:
      <span style='color:firebrick'>return</span> <span style='color:firebrick'>await</span> resp.<b style='color: DarkSlateBlue'>text</b>()

<i>output</i> = asyncio.<b style='color: DarkSlateBlue'>run</b>(<b style='color: DarkSlateBlue'>runJSCode</b>(<span style='color:olive'>'"Hello " + "World!"'</span>))
<b style='color: DarkSlateBlue'>print</b>(<i>output</i>)

</pre>
<style>
pre{
  background: #eee;
  padding:15px;
  border-radius:5px;
  font-size: 1rem;
}
</style>`);
});

app.listen( process.env.PORT || 3000 );