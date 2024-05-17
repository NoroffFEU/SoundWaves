export async function uploadImageToImgur(imageFile) {
  const ACCESS_TOKEN = "677864924d901ab7d356d7e28497937ca088e659";

  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return data.data.link;
    } else {
      console.error("Error uploading image to Imgur:", data);
      return null;
    }
  } catch (error) {
    console.error("Error uploading image to Imgur:", error);
    return null;
  }
}