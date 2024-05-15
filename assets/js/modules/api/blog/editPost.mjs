import { API_BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";
import { loginUser } from "../auth/login.mjs";

// Edit post

export async function editPost(name, token, id, title, body, tags, media) {
  const url = `${API_BASE_URL}${BLOG_ENDPOINTS.POST_BY_ID(name, id)}`;

  const data = {
    title: title,
    body: body,
    tags: [tags],
    media: media,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
