export async function registerUser(credentials) {
    return fetch('https://localhost:7021/register', {
        method: 'POST',
        headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json());
}