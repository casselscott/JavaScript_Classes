$(document).ready(function() {
    $('#signUpForm').submit(function(event) {
        event.preventDefault();

        let isValid = true;

        // Validate name
        const name = $('#name').val();
        if (name === '') {
            $('#nameError').show();
            isValid = false;
        } else {
            $('#nameError').hide();
        }

        // Validate email
        const email = $('#email').val();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            $('#emailError').show();
            isValid = false;
        } else {
            $('#emailError').hide();
        }

        // Validate password
        const password = $('#password').val();
        if (password.length < 8) {
            $('#passwordError').show();
            isValid = false;
        } else {
            $('#passwordError').hide();
        }

        // If all fields are valid, submit the form (for example, you can log a success message)
        if (isValid) {
            alert('Form submitted successfully!');
            // Here you can actually submit the form or make an Ajax request.
            // For demonstration purposes, we're just displaying an alert.
        }
    });
});
