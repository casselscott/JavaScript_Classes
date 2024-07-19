const { fetchUserDataWithPromise } = require('./fetchUserData');

async function fetchUserDataWithAsyncAwait() {
    try {
        const user = await fetchUserDataWithPromise();
        console.log(`Name: ${user.name}, Age: ${user.age}`);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

fetchUserDataWithAsyncAwait();
