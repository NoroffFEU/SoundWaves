import { BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";
import { APIError } from "../../../utils/errorHandling.mjs";
import { loginUser } from "../auth/login.mjs";

// Get one post by ID
export async function getPostByID(id) {
    const url = `${BASE_URL}${BLOG_ENDPOINTS.POST_BY_ID("Jesus_AH", id)}`;
    const token = await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },    
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new APIError("Failed to fetch post");
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
}