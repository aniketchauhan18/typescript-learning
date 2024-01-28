let score: number | string = 33

// type Alias
type User = {
  name: string,
  id: number,
}

type Admin = {
  username: string,
  id: number,
}

let aniket: User | Admin = {
  name: "Aniket",
  id: 234,
}

aniket = {
  username: "Chauhan",
  id: 235
}

// function getDbId(id : number | string) {
//   console.log(`the id is ${id}`)
// }

getDbId(23)
getDbId("34")

function getDbId(id : number | string) {
  // we cannot perform number and string manipulation/operations here it's treating it as a new datatype

  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array

const data: number[] = [2,42,455]
const stringData: string[] = ["Aniket", "Chauhan"]
// const data3: string[] | number [] = ["1", "t", "5", 9] // this means that it can either be a number or string but not both

const data3: (string | number | boolean)[] = [124,5757,57,"don't know what to do now"]

// fix the value of the variable
let pi:3.14 = 3.14
pi = 12424; // here we cannot change the value of the variable