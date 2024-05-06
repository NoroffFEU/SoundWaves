
const file = document.getElementById('file');
const img = document.getElementById('img');
const url = document.getElementById('url')


// const CLIENT_ID = 'd7ac36c85a3852a';
// const CLIENT_SECRET = '7c656c7e69236a558d27b666225ed536b4831e05';
// const IMGUR_API = 'https://api.imgur.com/3';

// file.addEventListener('change', (event)=> {
//   const formdata = new FormData()
//   formdata.append("image", event.target.files[0])
//   fetch('https://api.imgur.com/3/image', {
//     method: "post",
//     headers: {
//       Authorization: "Client-ID d7ac36c85a3852a"
//     },
//     body: formdata
//   }).then(data => data.json()).then(data => {
//     img.src = data.data.link
//     url.innerText = data.data.link
//   })
// })


const CLIENT_ID = 'd7ac36c85a3852a'; // Reemplaza esto con tu propio Client ID
const ACCESS_TOKEN = '677864924d901ab7d356d7e28497937ca088e659'; // Reemplaza esto con tu propio Access Token

file.addEventListener('change', (event) => {
  const formData = new FormData();
  formData.append('image', event.target.files[0]);
  
  fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      referrer: '',
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      img.src = data.data.link;
      url.innerText = data.data.link;
    } else {
      console.error('Error uploading image to Imgur:', data);
    }
  })
  .catch(error => {
    console.error('Error uploading image to Imgur:', error);
  });
});