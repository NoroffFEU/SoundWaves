import { API_BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";
import { loginUser } from "../auth/login.mjs";


// Delete post
export async function deletePost(id) {
    const url = `${API_BASE_URL}${BLOG_ENDPOINTS.POST_BY_ID("Jesus_AH", id)}`;
    const token = await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");
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