export async function loginUser(credentials) {
    return fetch('https://localhost:7063/Login', {
        method: 'POST',
        headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json());
}