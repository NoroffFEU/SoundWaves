import { BASE_URL, AUTH_ENDPOINTS } from "../../../utils/constants.mjs";
import { NameError, EmailError, PasswordError, APIError } from "../../../utils/errorHandling.mjs";

// Register new ADMIN
export async function registerUser(name, email, password) {
  // Handling name errors
  const nameError = new NameError(
    "The name value must not contain punctuation symbols apart from underscore (_)"
  );
  if (!name || !nameError.regex.test(name)) {
    throw nameError;
  }

  // Handling email errors
  const emailError = new EmailError(
    "The email value must be a valid stud.noroff.no email address."
  );
  if (!email || !emailError.regex.test(email)) {
    throw emailError;
  }

  // Handling password errors
  if (!password || password.length < 8) {
    throw new PasswordError(
      "The password value must be at least 8 characters."
    );
  }

  // API data
  const url = `${BASE_URL}${AUTH_ENDPOINTS.REGISTER}`;

  const data = {
    name: `${name}`,
    email: `${email}`,
    avatar: {
      url: "https://unavatar.io/noroffFEU",
      alt: `Avatar of ${name}`,
    },
    password: `${password}`,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // Fetching data
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new APIError(`Profile already exists with email ${email}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
