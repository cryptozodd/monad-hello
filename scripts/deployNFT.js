const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying NFT with:", deployer.address);

    const AlphaNFT = await ethers.getContractFactory("AlphaNFT");
    const alphaNFT = await AlphaNFT.deploy(deployer.address);
    await alphaNFT.deployed();

    console.log("AlphaNFT deployed to:", alphaNFT.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
