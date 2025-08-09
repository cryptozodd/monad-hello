require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const CONTRACT_ADDRESS = "0x359ac697Bafb27ecdee3617bC9037d0714a36f81"; // your deployed token
  const NEW_OWNER = "0x8b17Aad8Cd2B4Cd61d32f7De0B2F0d243BDc0766"; // your wallet

  console.log("Transferring ownership of:", CONTRACT_ADDRESS);
  console.log("New owner will be:", NEW_OWNER);

  const [deployer] = await ethers.getSigners();
  console.log("Executing from:", deployer.address);

  const Token = await ethers.getContractFactory("MyToken");
  const token = Token.attach(CONTRACT_ADDRESS);

  const tx = await token.transferOwnership(NEW_OWNER);
  console.log("Transaction sent:", tx.hash);

  await tx.wait();
  console.log("✅ Ownership transferred!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
