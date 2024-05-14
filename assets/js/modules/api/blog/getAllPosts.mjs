import { API_BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";
import { APIError } from "../../../utils/errorHandling.mjs";

// Get all posts by user
export async function getPostsByUser(limit = null, page = null, user = "Jesus_AH") {
    let url = `${API_BASE_URL}${BLOG_ENDPOINTS.POSTS_BY_USER(user)}`;

    if (limit !== null && page !== null) {
      url += `?limit=${limit}&page=${page}`;
    }

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new APIError('No posts created yet')
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }