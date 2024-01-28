type User = {
  name: string;
  email: string;
  isActive: boolean;
}


function createUser (user: User): User {
  return {name: "", email: "", isActive: true}
}


createUser({name: "Ani", email:"", isActive: true})

type Point = {
  x: number;
  y: number;
}

function printCoordinates(pt: Point) {
  console.log("X coordinate: " + pt.x)
  console.log("Y coordinate: ", pt.y)
}

printCoordinates({x: 10000, y: 23523})



// readonly

type Member = {
  readonly _id: string
  name : string
  email: string
  isActive: boolean
  creditcardDetails?: number // ? indicates here optional
}


let myMember: Member = {
  _id: "123456",
  name: "a",
  email: "a@gmail.com",
  isActive: false

}

myMember.email = "aniket@gmail.com"
// myMember._id = "q3545" // will not allow this



type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails =  cardNumber & cardDate & {
  cvv: number
}



export {}

