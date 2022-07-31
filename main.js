require("colors")

const {showMenuInquirer} = require("./helpers/inquire");

const main = async () => {
  console.log("Main program".rainbow);

  let opt= "";
  do{
    
     const {question} =  await  showMenuInquirer()
     opt = question;
      
  }while(opt !== "0")
}
main()
