//const express = require("express");
//const app = express();
//
//// /はif文に相当する処理を勝手にやってくれる。
//app.get("/", (request, response) => {
//  response.send("Hello Express");
//});
//
//app.listen(3000);

const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("static"))

app.listen(3000);