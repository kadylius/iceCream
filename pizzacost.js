"use strict";
function selectedApizza() {
    // Get the value of the selected pizza
    let selectedOption = document.querySelector("input[name='pizza']:checked").value;
    
    // Initialize variable to hold the cost of the selected pizza
    let pizzaCost;

    // Display alert based on the selected pizza and set the pizzaCost variable
    if (selectedOption === "5.25") {
        alert("You have selected Hawai pizza. That pizza cost $5.25!");
        pizzaCost = 5.25;
    } else if (selectedOption === "6.00") {
        alert("You have selected Pepperoni pizza. That pizza cost $6.00!");
        pizzaCost = 6.00;
    } else if (selectedOption === "10.00") {
        alert("You have selected Steak pizza. That pizza cost $10.00!");
        pizzaCost = 10.00;
    }
    
    // Use the pizzaCost variable as needed in your code
    console.log("The cost of the selected pizza is: $" + pizzaCost.toFixed(2));
}
