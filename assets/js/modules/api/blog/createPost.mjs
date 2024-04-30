import { BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";
import { loginUser } from "../auth/login.mjs";

// Create post
export async function createPost(name) {
    const url = `${BASE_URL}${BLOG_ENDPOINTS.POSTS_BY_USER(name)}`;
    const token = await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");
    const data = {
        title: "My 4 post",
        body: "This is my first post on the blog",
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new APIError("Failed to create post");
        }
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}