document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const numberInput = document.getElementById('numberInput');
    const messageParagraph = document.getElementById('message');

    submitButton.addEventListener('click', function() {
        let number = parseInt(numberInput.value);
        let message = "";

        while (isNaN(number) || number < 1 || number > 5) {
            number = parseInt(prompt("Please enter a valid number between 1 and 5:"));
        }

        switch (number) {
            case 1:
                message = "You entered one.";
                break;
            case 2:
                message = "You entered two.";
                break;
            case 3:
                message = "You entered three.";
                break;
            case 4:
                message = "You entered four.";
                break;
            case 5:
                message = "You entered five.";
                break;
            default:
                message = "This should never be seen.";
        }

        messageParagraph.textContent = message;
    });
});
