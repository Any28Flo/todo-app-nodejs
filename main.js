require("colors")

const {showMenuInquirer,     pauseInquirer} = require("./helpers/inquire");

const main = async () => {
  console.log("Main program".rainbow);

  let opt= "";
  do{
    
    opt =  await  showMenuInquirer()
    console.log("\n");
    await pauseInquirer()
      
  }while(opt !== "0")
}
main()
