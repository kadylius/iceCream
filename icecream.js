'use strict';


        function calculateOrder() {
            // Get the selected value of cone or cup
            var coneOrCup = document.getElementById('coneOrCup').value;
            // Get the number of scoops entered by the user
            var scoops = document.getElementById('scoops').value;
            // Get all checked toppings
            var toppings = document.querySelectorAll('input[name="topping"]:checked');
            // Initialize totalToppingCost to zero
            var totalToppingCost = 0;
        
            // Loop through each checked topping and add its value to totalToppingCost
            toppings.forEach(function(topping) {
                totalToppingCost += parseFloat(topping.value);
            });
        
            // Calculate base price based on the number of scoops (Assuming each scoop costs $2)
            var basePrice = parseFloat(scoops) * 2;
            // Calculate tax (Assuming 10% tax)
            var tax = 0.1 * basePrice;
            // Calculate total price including base price, toppings cost, and tax
            var totalPrice = basePrice + totalToppingCost + tax;
        
            // Display order summary with base price, toppings cost, tax, and total price
            document.getElementById('orderSummary').innerHTML = "<h3>Order Summary</h3>" +
                "<p>Base Price: $" + basePrice.toFixed(2) + "</p>" +
                "<p>Toppings Cost: $" + totalToppingCost.toFixed(2) + "</p>" +
                "<p>Tax (10%): $" + tax.toFixed(2) + "</p>" +
                "<p>Total Price: $" + totalPrice.toFixed(2) + "</p>";
        }

