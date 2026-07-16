const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");

const API_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

async function fetchCryptoPrices() {
    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to fetch data");
        }

        const data = await response.json();

        bitcoin.textContent = data.bitcoin.usd.toLocaleString();
        ethereum.textContent = data.ethereum.usd.toLocaleString();
        dogecoin.textContent = data.dogecoin.usd.toLocaleString();

    } catch (error) {

        bitcoin.textContent = "--";
        ethereum.textContent = "--";
        dogecoin.textContent = "--";

        console.error(error);

    }
}

fetchCryptoPrices();

// Refresh every 30 seconds
setInterval(fetchCryptoPrices, 30000);