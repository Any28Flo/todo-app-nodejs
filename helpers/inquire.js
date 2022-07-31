require("colors");

const inquirer = require("inquirer");

const questions =  [
    {
    name: "question",
    type : "list",
    choices : [
        {
            value: "1",
            name:"1. Add task"
        },
        {
            value: "2",
            name: "2. Show tasks"
        },
        {
            value: "3",
            name: "3. Show finished tasks",
        },
        {
            value: "4",
            name: "4. Show pending tasks",
        },
        {
            value: "5",
            name : "5. finish tasks",
        },
        {
            value: "6",
            name : "6. Delete task"
        },
        {
            value : "0",
            name : "0. Go out"
        }

        
        
        
        

    ]
   }
];

const showMenuInquirer = async ()=> {

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
module.exports ={
    showMenuInquirer,
    pauseInquirer
}