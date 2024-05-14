import { API_BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";
import { APIError } from "../../../utils/errorHandling.mjs";
import { loginUser } from "../auth/login.mjs";

// Get one post by ID
export async function getPostByID(id, user = "Jesus_AH") {
    const url = `${API_BASE_URL}${BLOG_ENDPOINTS.POST_BY_ID(user, id)}`;

    const options = {
      headers: {
        "Content-Type": "application/json",
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