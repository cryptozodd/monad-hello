# Monad Hello

A Hardhat-based project demonstrating smart contract development, deployment, and interaction on **Monad Testnet**.

## 📦 Contracts
- **AlphaToken.sol** – ERC20 token with minting capability.
- **AlphaNFT.sol** – ERC721 NFT with minting capability.

## 📜 Scripts
- `deployAlpha.js` – Deploys the AlphaToken contract.
- `mintAlpha.js` – Mints AlphaTokens to a given address.
- `transferOwnership.js` – Transfers contract ownership to a new address.
- `deployNFT.js` – Deploys the AlphaNFT contract.
- `mintNFT.js` – Mints an NFT to a given address.

## 🚀 Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/cryptozodd/monad-hello.git
   cd monad-hello
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   PRIVATE_KEY=your_wallet_private_key
   RPC_URL=https://testnet-rpc.monad.xyz
   ```

## 🛠 Commands

### Compile contracts
```bash
npx hardhat compile
```

### Deploy AlphaToken
```bash
npx hardhat run scripts/deployAlpha.js --network monadTestnet
```

### Mint AlphaTokens
```bash
npx hardhat run scripts/mintAlpha.js --network monadTestnet
```

### Transfer Ownership
```bash
npx hardhat run scripts/transferOwnership.js --network monadTestnet
```

### Deploy NFT
```bash
npx hardhat run scripts/deployNFT.js --network monadTestnet
```

### Mint NFT
```bash
npx hardhat run scripts/mintNFT.js --network monadTestnet
```

---

💡 **Pro tip:** Always run  
```bash
git pull --rebase origin main
```
before pushing changes to avoid merge mess.
have fun.
