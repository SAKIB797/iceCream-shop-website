document.getElementById('registrationForm').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const postcode = document.getElementById('postcode').value;
    const errorMessages = [];

    if (username.trim() === '') {
        errorMessages.push('Username cannot be blank');
    }

    if (password.length < 9) {
        errorMessages.push('Password must be at least 9 characters long');
    }

    if (!/^\d{4}$/.test(postcode)) {
        errorMessages.push('Postcode must be a 4-digit number');
    }

    if (errorMessages.length > 0) {
        e.preventDefault(); // Prevent form submission

        const errorMessageDiv = document.getElementById('errorMessages');
        errorMessageDiv.innerHTML = errorMessages.join('<br>');
    }
});