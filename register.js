// User class with setters and getters
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Getter and Setter for username
    get username() {
        return this._username;
    }

    set username(value) {
        if (value.length < 5) {
            throw new Error('Username must be at least 5 characters long.');
        }
        this._username = value;
    }

    // Getter and Setter for email
    get email() {
        return this._email;
    }

    set email(value) {
        if (!value.includes('@')) {
            throw new Error('Invalid email format.');
        }
        this._email = value;
    }

    // Getter and Setter for password
    get password() {
        return this._password;
    }

    set password(value) {
        if (value.length < 8) {
            throw new Error('Password must be at least 8 characters long.');
        }
        this._password = value;
    }
}

// User registration system using a Map
let userMap = new Map();

// Function to register a new user
function registerUser(username, email, password) {
    try {
        let newUser = new User(username, email, password);
        userMap.set(username, newUser);
        console.log(`User ${username} registered successfully.`);
    } catch (error) {
        console.error(`Error registering user: ${error.message}`);
    }
}

// Example usage:
registerUser('john_doe', 'john.doe@example.com', 'password123'); // Success
registerUser('jane', 'jane@example', 'pass'); // Error: Invalid email format
registerUser('user1', 'user1@example.com', 'pass'); // Error: Password must be at least 8 characters long

// Retrieve user details from userMap
function getUserDetails(username) {
    let user = userMap.get(username);
    if (user) {
        console.log(`Username: ${user.username}, Email: ${user.email}`);
    } else {
        console.log(`User ${username} not found.`);
    }
}

getUserDetails('john_doe'); // Output: Username: john_doe, Email: john.doe@example.com
getUserDetails('jane'); // Output: User jane not found.
