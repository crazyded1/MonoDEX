
// Frontend JS
const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Укажи адрес контракта
const contractABI = []; // Вставь сюда ABI контракта Lock.sol

let provider, signer, contract;

document.getElementById('connectWallet').onclick = async () => {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        const address = await signer.getAddress();
        document.getElementById('walletAddress').innerText = `Connected: ${address}`;
    } else {
        alert('Please install MetaMask!');
    }
};

document.getElementById('placeOrder').onclick = async () => {
    const amount = document.getElementById('orderAmount').value;
    const price = document.getElementById('orderPrice').value;

    const tx = await contract.placeLimitOrder(amount, price);
    await tx.wait();
    alert("Limit order placed!");
};

document.getElementById('executeOrder').onclick = async () => {
    const orderId = document.getElementById('executeOrderId').value;

    const tx = await contract.executeLimitOrder(orderId);
    await tx.wait();
    alert("Order executed!");
};

document.getElementById('withdraw').onclick = async () => {
    try {
        const tx = await contract.withdraw();
        await tx.wait();
        alert("Withdrawal successful!");
    } catch (error) {
        alert("Withdrawal failed: " + error.message);
    }
};
