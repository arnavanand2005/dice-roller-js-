function rolldice(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Get the number of dice rolls from the input field
    const input = document.getElementById("dice-count").value;
    const value = document.getElementById("valueres");  // The element to display the text result
    const imgres = document.getElementById("imgres");  // The element to display the images

    const result = [];  // Array to store the dice roll results
    const image = [];  // Array to store the image elements for each dice roll

    // Loop to roll the dice based on the input number
    for (let i = 0; i < input; i++) {
        let answer = Math.floor(Math.random() * 6) + 1;  // Generate a random number between 1 and 6
        result.push(answer);  // Store the dice roll result
        image.push(`<img src="dice_image/${answer}.png" alt="Dice ${answer}">`);  // Store the image for the dice roll
    }

    // Display the dice roll results (text)
    value.textContent = `Dice: ${result.join(", ")}`;

    // Display the dice images
    imgres.innerHTML = image.join(" ");
}
