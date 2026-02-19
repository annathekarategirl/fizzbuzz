// TODO: Define constants for the form and the result display area
const butin=document.getElementById("button1");
const result=document.getElementById("result");
// TODO: Add the first line of the event listener to handle form submission
butin.onclick=function(){
    
    event.preventDefault();
    let inputnum=document.getElementById("numberinput").value;
    console.log(inputnum)
    inputnum=Number(inputnum);
    console.log(inputnum)}
    // Prevent the form from refreshing the page
    

// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page
//result.textContent = output;
