// Получаем кнопку для подключения
const connectButton = document.getElementById("connectButton");

// Устанавливаем провайдера (MetaMask)
let provider;

if (window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
} else {
  alert("Please install MetaMask!");
}

// Функция для подключения кошелька
connectButton.addEventListener("click", async () => {
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  console.log("Connected to:", address);
  alert(`Connected to ${address}`);
});

