const Task = require("./task");

class Tasks{
    _tasks = {};

    get listArr (){
        let array =[];
        Object.keys(this._tasks).forEach(key =>{
            console.log(key);
            array.push(this._tasks[key])
        })
        return array
    }

    constructor(tasks){
        this._tasks= {}
    }
    
    newTask(desc=""){
        let newTask = new Task(desc)
        this._tasks[newTask.id] = newTask;
    }

}
module.exports ={Tasks}