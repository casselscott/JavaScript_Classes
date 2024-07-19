document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userInfoForm');
    const submitButton = document.getElementById('submitButton');
    const greetingDiv = document.getElementById('greeting');

    submitButton.addEventListener('click', function() {
        // Retrieve values from input fields
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);

        // Calculate age in months
        const ageInMonths = age * 12;

        // Create the greeting message
        const message = `Hello, ${name}! You are ${ageInMonths} months old.`;

        // Display the greeting message in the div
        greetingDiv.textContent = message;
    });
});
