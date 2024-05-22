const CLIENT_ID = 'd7ac36c85a3852a'; 
const REFRESH_TOKEN = '801a424005032b6dd9cd2d8d6df2c2ce63a272aa';

export async function getAccessToken() {
  const response = await fetch('https://api.imgur.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: REFRESH_TOKEN,
      client_id: CLIENT_ID,
      client_secret: '7c656c7e69236a558d27b666225ed536b4831e05',
      grant_type: 'refresh_token',
    }),
  });

  const data = await response.json();
  return data.access_token;
}
