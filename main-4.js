const express = require("express");
const fs = require("fs");
const ejs = require("ejs");

const app = express();
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

const books = [
    { title: "吾輩は猫である", author: "夏目漱石" },
    { title: "こころ", author: "夏目漱石" },
    { title: "坊つちやん", author: "夏目漱石" },
    { title: "舞姫", author: "森鴎外" },
    { title: "高瀬舟", author: "森鴎外" },
];
app.use(express.static("static"));
app.post("/search", (request, response) => {
    let res = books.filter((book) => book.author === request.body.person)
    let out = "";
    for (let book of res) {
        out += book.title + "<br>"
    }
    if (out === "") out = "検索結果はありません。<br>";
    response.send(
        `writer:${request.body.person}<br>${out}<br>
        <a href="/">戻る</a>`
    );
});
app.listen(3000);