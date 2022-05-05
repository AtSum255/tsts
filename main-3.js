const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

const names = ["田中", "鈴木", "佐藤"];
let visitor_count = 0;
app.get("/", (request, response) => {
    ++visitor_count;
    let epoctime = new Date();
    let access_time = `${epoctime.getFullYear()}年${epoctime.getMonth()}月${epoctime.getDate()}日${epoctime.getHours()}:${epoctime.getMinutes()}:${epoctime.getSeconds()}`
    const template = fs.readFileSync("template.ejs", "utf-8");
    const html = ejs.render(template, {
        n: visitor_count,
        now: access_time,
    });
    response.send(html);
});

app.listen(3000);