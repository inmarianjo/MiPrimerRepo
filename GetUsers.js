var https = require("https");
https
    .get("https://reqres.in/api/users?page=2", function (resp) {
    var data = "";
    resp.on("data", function (chunk) {
        data += chunk;
    });
    resp.on("end", function () {
        console.log(JSON.parse(data));
    });
})
    .on("error", function (err) {
    console.log("Error: " + err.message);
});
// algo//
