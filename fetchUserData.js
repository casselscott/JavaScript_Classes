function fetchUserDataWithPromise() {
    return new Promise((resolve, reject) => {
        // Simulate fetching user data asynchronously
        setTimeout(() => {
            let user = { name: "John Doe", age: 30 };
            resolve(user);
        }, 2000);
    });
}

module.exports = { fetchUserDataWithPromise };
