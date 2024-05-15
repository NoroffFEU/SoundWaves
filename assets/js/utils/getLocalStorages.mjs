export function getUserFromLocalStorage() {
    const storedUser = localStorage.getItem("userData");
    const userData = JSON.parse(storedUser);
    const name = userData.name;
    return name;
}

export function getTokenFromLocalStorage(){
    const storedUser = localStorage.getItem("userData");
    const userData = JSON.parse(storedUser);
    const token = userData.token;
    return token;
}