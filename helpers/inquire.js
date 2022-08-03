require("colors");

const inquirer = require("inquirer");

const questions =  [
    {
    name: "question",
    type : "list",
    choices : [
        {
            value: "1",
            name: `${"1.".green} Add task`
            //"1. Add task"
        },
        {
            value: "2",
            name: `${"2.".green} Show tasks`
        },
        {
            value: "3",
            name: `${"3.".green} Show finished tasks`
        },
        {
            value: "4",
            name: `${"4.".green} Show pending tasks`
        },
        {
            value: "5",
            name: `${"5.".green} Finish tasks`
        },
        {
            value: "6",
            name: `${"6.".green} Delete task`
        },
        {
            value : "0",
            name: `${"0.".green} Exit`
        }
    ]
   }
];

const showMenuInquirer = async ()=> {
    console.clear();
    console.log("================");
    console.log("Choose an option".green);
    console.log("================");

    const {question}= await inquirer.prompt(questions)
    return question;
}
const pauseInquirer = async () =>{
     await inquirer.prompt({
        type: "input",
        name:"enter",
        message : `Press ${"ENTER".green} to continue`
    })
}
const message = async(message)=>{
    const msg = {
        type : "input",
        name : "input",
        message: message
    }
   const {input} = await inquirer.prompt(msg)
   return input
}
const listDropTask = async( tasks =[]) =>{
    const choices = tasks.map((task, index) =>{

        let indx= `${index+1}`.green;
        return {
            value: task.id,
            name: `${indx}. ${task.desc}`
        }
})
    choices.unshift({ value: '0', name: `${"0.".green } Cancel`});

    const questions = {
        name: "taskToDrop",
        type: "list",
        message: "Choose a task to drop",
        choices : choices
    };
    const {taskToDrop} = await inquirer.prompt(questions);

    return taskToDrop

}
 const confirmDrop = async (msg) =>{
    const questions = {
        name: "confirm",
        type: "confirm",
        message: msg
    }
    const {confirm} = await inquirer.prompt(questions);
    return confirm

}
module.exports ={
    showMenuInquirer,
    pauseInquirer,
    message,
    listDropTask,
    confirmDrop
}