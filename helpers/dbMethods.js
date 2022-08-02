const fs = require("fs");

const path = "./db/tasks.json";

const saveFile = (data) =>{
    fs.writeFileSync(path, JSON.stringify(data) );
}
const readDatabase = () =>{
    //saber si existe el archivo
    if(!fs.existsSync(path)){
        return null;
    }
    //Read file
    const data = fs.readFileSync(path, {encoding: 'utf-8'});
    return JSON.parse(data)
}

module.exports ={
    saveFile,
    readDatabase
}