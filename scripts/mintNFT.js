const { ethers } = require("hardhat");

async function main() {
    const [signer] = await ethers.getSigners();
    console.log("Minting NFT from:", signer.address);

    // Make sure you paste the deployed NFT contract address here
    const nftAddress = "0x4A9fCD4C2f757aC68c09F499dD981eA29A900fBa";

    // Load ABI & attach to deployed address
    const alphaNFT = await ethers.getContractAt("AlphaNFT", nftAddress);

    const tx = await alphaNFT.safeMint(signer.address);
    await tx.wait();

    console.log(`✅ NFT minted to ${signer.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
