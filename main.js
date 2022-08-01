require("colors")

const {showMenuInquirer,     pauseInquirer, message} = require("./helpers/inquire");
const { saveFile } = require("./helpers/saveFile");
const { Tasks } = require("./models/tasks");

const main = async () => {

  let opt= "";
  let tasks = new Tasks();

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
        console.log(tasks.listArr)
        break   
    }
    console.log("\n");
    saveFile(JSON.stringify(tasks.listArr))
    await pauseInquirer()
      
  }while(opt !== "0")
}
main()
