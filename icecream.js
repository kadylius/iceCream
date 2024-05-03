'use strict';


        function calculateOrder() {
            var coneOrCup = document.getElementById('coneOrCup').value;
            var scoops = document.getElementById('scoops').value;
            var toppings = document.querySelectorAll('input[name="topping"]:checked');
            var totalToppingCost = 0;

            toppings.forEach(function(topping) {
                totalToppingCost += parseFloat(topping.value);
            });

            var basePrice = parseFloat(scoops) * 2; // Assuming each scoop costs $2
            var tax = 0.1 * basePrice; // Assuming 10% tax
            var totalPrice = basePrice + totalToppingCost + tax;

            document.getElementById('orderSummary').innerHTML = "<h3>Order Summary</h3>" +
                "<p>Base Price: $" + basePrice.toFixed(2) + "</p>" +
                "<p>Toppings Cost: $" + totalToppingCost.toFixed(2) + "</p>" +
                "<p>Tax (10%): $" + tax.toFixed(2) + "</p>" +
                "<p>Total Price: $" + totalPrice.toFixed(2) + "</p>";
        }

