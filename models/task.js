const { v4: uuidv4 } = require('uuid');

class Task{
    id ="";
    desc = "";
    fishinedOn = null;

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.fishinedOn = null;
    }
}
module.exports = Task;