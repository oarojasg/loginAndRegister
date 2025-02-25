import { loginUser } from "./loginUser";

export async function loginUserIdentityToken(credentials) {
    var URLparameters = '?useCookies=false';
    return await loginUser(credentials, URLparameters);
}