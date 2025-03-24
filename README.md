# 🧬 MonoDEX — Uniswap v3 Fork on Monad

**MonoDEX** is a decentralized exchange built on the Monad blockchain, based on a customized fork of Uniswap v3. This project includes both smart contracts and a basic frontend for testing and interaction.

---

## 🧱 Structure

```
MonoDEX/
├── contracts/         # Core contracts (Uniswap v3 logic)
├── frontend/          # Simple React frontend for testing
├── scripts/           # Deployment and interaction scripts
├── test/              # Unit tests
├── ignition/          # Hardhat Ignition deployment modules
└── hardhat.config.js  # Hardhat config
```

---

## 🔧 Key Modifications

- Adapted Uniswap v3 core contracts for the Monad EVM-compatible environment
- Integrated Monad-native WETH address: `0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37`
- Simplified frontend for local devnet interaction
- Custom deployment scripts using Hardhat Ignition

---

## 🚀 Usage

### 1. Install dependencies
```bash
npm install
```

### 2. Compile contracts
```bash
npx hardhat compile
```

### 3. Run local node
```bash
npx hardhat node
```

### 4. Deploy
```bash
npx hardhat ignition deploy ./ignition/modules/YourModule.js
```

### 5. Frontend (from `frontend/`)
```bash
cd frontend
npm install
npm run dev
```

---

## 💡 Plans

- Add subgraph integration
- Implement limit orders
- Extend UI and connect wallet
- Deploy to Monad devnet/testnet

---

## 🤝 Contributing

Open an issue or PR if you'd like to collaborate or provide suggestions!

---

## 📬 Contact

Feel free to reach out via GitHub or [Telegram/X/...].
