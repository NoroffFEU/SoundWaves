import { API_BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";

// Delete post
export async function deletePost(id, name, token) {
    const url = `${API_BASE_URL}${BLOG_ENDPOINTS.POST_BY_ID(name, id)}`;
   
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(url, options);
      
    } catch (error) {
      console.error(error);
    }
  }