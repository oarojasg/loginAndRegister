export async function loginUser(credentials, URLparameters) {
    return fetch('https://localhost:7021/login' + URLparameters, {
        method: 'POST',
        headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials).toString()
    })
    .then(async data => {
        data.json();
        console.log(data);
        console.log('Response body:');
        for await (const linea of data.body) console.log(linea);
    } );
}