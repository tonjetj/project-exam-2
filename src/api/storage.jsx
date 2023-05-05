
async function fetchWithToken(url) {
  try {
    const token = localStorage.getItem('accessToken');
    const getData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

export default fetchWithToken; 
