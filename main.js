const express = require("express");
const fs = require("fs");
const ejs = require("ejs");

const app = express();
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

class post_info {
    user_name;
    post_content;
    constructor (user_name, post_content){
        this.user_name = user_name;
        this.post_content = post_content;
    }
};

let posts_data = []

function update(response){
    const template = fs.readFileSync("template.ejs", "utf-8");
    const html = ejs.render(template, {
        posts: posts_data,
    });
    response.send(html);
}

app.get("/", (request, response) => {
    update(response);
});

app.post("/send", (request, response) => {
    posts_data.push(new post_info(request.body.user_name, request.body.post_content));
    update(response);
});

app.listen(process.env.PORT || 3000);