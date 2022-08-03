require("colors")

const {
  showMenuInquirer,
  pauseInquirer,
  message,
  listDropTask,
  confirmDrop
} = require("./helpers/inquire");
const { saveFile, readDatabase } = require("./helpers/dbMethods");
const { Tasks } = require("./models/tasks");

const main = async () => {

  let opt= "";
  let tasks = new Tasks();
  let tasksDb= readDatabase();

  if(tasksDb){
    //guardalas
    tasks.loadTaskFromDatabase(tasksDb)
  }
 // await pauseInquirer();

  do{
    
    opt =  await  showMenuInquirer();
    switch(opt){
      case '1':
        //add task
        const msg = await message("Add a description");
        tasks.newTask(msg)
        break;
      case '2': 
        //show task
        tasks.list()
        break
      case '3':
        tasks.listTaskDoneAndTodo();
        break;
      case '4':
        tasks.listTaskDoneAndTodo(false);
        break;
      case '5':
       let taskToDrop =await listDropTask(tasks.listArr);
       let confirm = confirmDrop("Are you sure to drop the task?")

       if(confirm){
         tasks.dropTask(taskToDrop)

       }

    }
    console.log("\n");
   //saveFile(tasks.listArr)
    await pauseInquirer()
      
  }while(opt !== "0")
}
main()
