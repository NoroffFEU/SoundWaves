import { API_BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";
import { APIError } from "../../../utils/errorHandling.mjs";
import { loginUser } from "../auth/login.mjs";

// Get all posts by user
export async function getPostsByUser(limit = null, page = null) {
    let url = `${API_BASE_URL}${BLOG_ENDPOINTS.POSTS_BY_USER("Jesus_AH")}`;

    if (limit !== null && page !== null) {
      url += `?limit=${limit}&page=${page}`;
    }

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
        throw new APIError("Failed to fetch posts");
      }
      const json = await response.json();
      console.log(json.data);
      return json;
    } catch (error) {
      console.error(error);
    }
  }