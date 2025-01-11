
const apiUrl = "https://api.oceanprotocol.com/v1/assets";


async function fetchAssets() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Assets:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


fetchAssets();
