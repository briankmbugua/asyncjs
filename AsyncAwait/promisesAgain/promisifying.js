//this is converting a normal javascript function
//by making it take a callback that returns a promise

const fs = require("fs");
const path = require("path");

const getFile = (filename) => {
    return new Promise((resolve,reject)=>{
fs.readFile(filename, 'utf8', (err,data)=>{
    if(err) {
        reject(err)
        return
    }
    resolve(data)
})
    })
}
getFile(path.join(__dirname,"passwd.txt"))
.then(data=> console.log(data))
.catch(err => console.error(err))