const https = require("https");

https
    .get ("https://reqres.in/api/users?page=2", (resp: any)=> {
        let data ="";

        resp.on("data", chunk => {
            data += chunk;

        });

        resp.on("end", () =>{
            console.log(JSON.parse(data));

        });

    })
    .on("error", (err: any) => {
        console.log("Error: " + err.message)

    });
    
    // algo//


