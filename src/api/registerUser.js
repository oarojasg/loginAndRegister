import config from '../configs/config.json'

export async function registerUser(credentials) {
    const apiAddress = config.api.url + "register"
    var response = await fetch(apiAddress, {
        method: 'POST',
        headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    if (response.ok) return {status: 200};
    let byteArray = [];
    for await (const chunk of response.body){
        console.log(chunk);
        byteArray.push(chunk);
    }
    const respuestaString =  byteArray.length == 0 ? '' :
    new TextDecoder('utf-8').decode(byteArray[0]);
    console.log(respuestaString);
    return JSON.parse(respuestaString);
}