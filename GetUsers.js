"use strict";
const https = require("https");
https
    .get("https://reqres.in/api/users?page=2", (resp) => {
    let data = "";
    resp.on("data", chunk => {
        data += chunk;
    });
    resp.on("end", () => {
        console.log(JSON.parse(data));
    });
})
    .on("error", (err) => {
    console.log("Error: " + err.message);
});
