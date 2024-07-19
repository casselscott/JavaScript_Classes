function fetchUserDataWithCallback(callback) {
    setTimeout(() => {
        let user = { name: "John Doe", age: 30 };
        callback(user);
    }, 2000);
}

function displayUserCallback(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

// Use the callback function to fetch and display user data
fetchUserDataWithCallback(displayUserCallback);
