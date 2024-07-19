function fetchUserDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = { name: "John Doe", age: 30 };
            resolve(user);
        }, 2000);
    });
}

// Use the promise to fetch and display user data
fetchUserDataWithPromise()
    .then(user => {
        console.log(`Name: ${user.name}, Age: ${user.age}`);
    })
    .catch(error => {
        console.error(error);
    });
