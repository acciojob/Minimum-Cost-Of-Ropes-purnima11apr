function calculateMinCost() {
  //your code here
    var ropeInput = document.getElementById("rope-lengths");

    // Get the comma-separated rope lengths and convert them to an array of integers
    var ropeLengths = ropeInput.value.split(",").map(function (item) {
        return parseInt(item.trim());
    });

    // Check if there are at least two rope lengths
    if (ropeLengths.length < 2) {
        alert("Please enter at least two rope lengths.");
        return;
    }

    // Sort the rope lengths in ascending order
    ropeLengths.sort(function (a, b) {
        return a - b;
    });

    // Initialize the total cost
    var totalCost = 0;

    // Combine ropes to find the minimum cost
    while (ropeLengths.length > 1) {
        // Take the two shortest ropes
        var shortestRope1 = ropeLengths.shift();
        var shortestRope2 = ropeLengths.shift();

        // Calculate the cost of combining these ropes and add it to the total cost
        var combinedCost = shortestRope1 + shortestRope2;
        totalCost += combinedCost;

        // Insert the combined rope length back into the sorted array
        ropeLengths.push(combinedCost);

        // Re-sort the array to maintain order
        ropeLengths.sort(function (a, b) {
            return a - b;
        });
    }

    // Display the minimum cost in the "result" div
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Minimum Cost: " + totalCost;

  
  
  
}  
