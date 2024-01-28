
// isPaid => has a defailt value
let loginUser = (name: string, number: number, isPaid: boolean = false):void =>  {
  // returning nothing
}

loginUser("Aniket", 383553);

let getUser = (name: string, email: string, rollNo: Number): Number => {
  return rollNo
}

const heros = ["noob", "panoti", "workshop"]

heros.map((hero): string => {
  return `hero is ${hero}`
})


// returning a void
function consoleError (errmsg: string): void {
  console.log(errmsg);
}

function handleError (err: string): never {
  throw new Error(err);
}