const fs = require("fs");

fs.writeFile("demo1.txt", "This is sample text", (err) =>{
    if(err) {
        console.log(err);
    }
    else{
        console.log("successful1");
    }
})

fs.appendFile("demo1.txt", " Hello I am 33 years old", (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Successful2");
    }
})

fs.readFile("demo1.txt", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// fs.rename("demo1.txt", "demo2.txt", (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successful");
//     }
// })

// fs.unlink("demo1.txt", (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successful");
//     }
// })

fs.exists("demo1.txt", (result) => {
    if(result) {
        console.log("Found file");
    }
    else {
        console.log("File not found");
    }
})