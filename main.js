require("colors")
const { showMenu, pause } = require("./helpers/messages")

const main = async () => {
  console.log("Main program".rainbow)
  let option = ""
  do {
    option = await showMenu()
  } while (option !== "0")
}
main()
