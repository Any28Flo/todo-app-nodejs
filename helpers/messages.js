const { log } = require("console")

require("colors")

const showMenu = () => {
  return new Promise((resolve, rejec) => {
    console.clear()
    console.log("===============".green)
    console.log("CHOSE AN OPTION".green)
    console.log("===============".green)

    console.log("1. Add task".green)
    console.log("2. Show tasks".green)
    console.log("3. Show finished tasks".green)
    console.log("4. Show pending tasks".green)
    console.log("5. finish tasks".green)
    console.log("6. Delete task".green)
    console.log("0. Go out".green)

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    readLine.question(`Choose an option\n`, (opt) => {
      readLine.close()

      resolve(opt)
    })
  })
}
const pause = () => {
  return new Promise((resolve, reject) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    readLine.question(`Press ${"ENTER".green} to continue`, (opt) => {
      readLine.close()
      resolve(opt)
    })
  })
}




module.exports = { showMenu, pause}
