// run the below code - use some of the language we learned today to explain to someone else in your breakout room why it's failing

function greetUser(name) {
  let greeting = "Hi ";//define inside function with let so is not work or when I console.log second time
                       //it is not (+name) there

  console.log(greeting + name);
}

greetUser("Naima");
console.log(greeting);
