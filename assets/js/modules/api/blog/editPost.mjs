import { BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";
import { loginUser } from "../auth/login.mjs";

// Edit post

export async function editPost(id, name){
    const url = `${BASE_URL}${BLOG_ENDPOINTS.POST_BY_ID(name, id)}`;
    const token = await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");

    const data = {
        title: "My updated post",
        body: "This is an updated post on the bloooooog",
    };
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    }


    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}