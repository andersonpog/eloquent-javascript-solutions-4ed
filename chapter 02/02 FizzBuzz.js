// Your code here.
for(let i=1; i<=100; i++){
  if(i%3==0 && i%5==0)
    console.log("FizzBuzz")
  else if(i%3==0)
    console.log("Fizz")
  else if(i%5==0)
    console.log("Buzz")
  else console.log(i)
}

// Clever
for(let i=1; i<=100; i++){
  let s = ''
  if(i%3==0)
    s+="Fizz"
  if(i%5==0)
    s+="Buzz"
  console.log(s||i)
}
