const {writeFileSync} = require("fs");

const saveFile = (data) =>{
    const route = "./db/tasks.json";
    writeFileSync(route,data );
}
module.exports ={
    saveFile
}