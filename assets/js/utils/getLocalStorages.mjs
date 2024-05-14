export function getUserFromLocalStorage() {
    const storedUser = localStorage.getItem("userData");
    const userData = JSON.parse(storedUser);
    const name = userData.name;
    return name;
}