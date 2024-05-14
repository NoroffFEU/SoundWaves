import { API_BASE_URL, AUTH_ENDPOINTS } from "../../../utils/constants.mjs";
import { APIError } from "../../../utils/errorHandling.mjs";
import { login } from "../../../utils/loginLogout.mjs";
import { displayError } from "../../components/errorDisplay.mjs";

// Login User
export async function loginUser(email, password) {
  const url = `${API_BASE_URL}${AUTH_ENDPOINTS.LOGIN}`;

  const userData = {
    email: `${email}`,
    password: `${password}`,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new APIError("Invalid email or password");
    }
    const json = await response.json();
    const userData = json.data;

    login(userData);
    return userData;
  } catch (error) {
    displayError(error);
    console.error(error);
  }
}
