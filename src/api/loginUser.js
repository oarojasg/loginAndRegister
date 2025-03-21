import config from '../config.json'
export async function loginUser(credentials, URLparameters) {
    const apiAddress = config.api.url + "login"
    const response = await fetch(
        apiAddress + URLparameters, {
        method: 'POST',
        headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials).toString()
    });
    let UInt8ArrayHolder = [];
    for await (const chunk of response.body){
        console.log(chunk);
        UInt8ArrayHolder.push(chunk);
    }
    const respuestaString = new TextDecoder('utf-8').decode(
        UInt8ArrayHolder[0]);
    console.log(respuestaString);
    const respuestaJSON = JSON.parse(respuestaString);
    console.log(respuestaJSON.accessToken)
    return respuestaJSON.accessToken;
}