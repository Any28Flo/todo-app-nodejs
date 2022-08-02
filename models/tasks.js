require("colors");
const Task = require("./task");

class Tasks{
    _tasks = {};

    get listArr (){
        let array =[];
        Object.keys(this._tasks).forEach(key =>{
            array.push(this._tasks[key])
        })
        return array
    }

    constructor() {
        this._tasks = {}
    }
    
    newTask(desc=""){
        let newTask = new Task(desc)
        this._tasks[newTask.id] = newTask;
    }

    loadTaskFromDatabase(arrayTasks = []){

        arrayTasks.forEach(task => {
            this._tasks[task.id] = task
        })
        //this._tasks= array;
    }

    list(){
        //hago referencia a listArr porque es un objeto this._task entonces hay que iterar sobre
        //el entonces el metodo listArr nos regresa el arr a iterar
       this.listArr.forEach((task,index) =>{
           const {desc, fishinedOn} = task;
           const status = fishinedOn ? "completada".green  : "pendiente".red;
           console.log ( `${index+1}.- ${desc} ::  ${ status } `)
        })
    }
    listTaskDoneAndTodo( done = true){
        let counter = 0;
        this.listArr.forEach( (task) =>{
            const {desc, fishinedOn} = task;

            if(done){
                if(fishinedOn){
                    counter++;
                    console.log ( `${counter.toString().green}.- ${desc}  `)

                }
            }else{
                if(!fishinedOn){
                    counter++
                    console.log ( `${counter.toString().green}.- ${desc}`)
                }
            }
        })
    }



}
module.exports ={Tasks}