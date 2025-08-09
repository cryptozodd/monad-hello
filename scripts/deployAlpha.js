const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with:", deployer.address);

    const AlphaToken = await ethers.getContractFactory("AlphaToken");
    const alpha = await AlphaToken.deploy(deployer.address);
    await alpha.deployed(); // v5 way of waiting

    console.log("AlphaToken deployed to:", alpha.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
