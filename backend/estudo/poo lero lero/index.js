
//objeto
const myObject = {

  name: "Ozemelo",
  email: "ozemelo@gmail.com",

  info: ()=>{
    console.log("Name...:"+this.name)
    console.log("email..:"+this.email)
  }

}

// myObject.name = "Bart"
// myObject.email = "bart@gmail.com"
myObject.info()
