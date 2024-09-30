const CLIENT_ID = "a0af399aae11d62";

export async function uploadImage(image) {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error uploading image");
    }

    const data = await response.json();

    return data.data.link;
  } catch (error) {
    console.error(error);
  }
}
