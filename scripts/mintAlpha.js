const { ethers } = require("hardhat");

async function main() {
    const [signer] = await ethers.getSigners();
    console.log("Minting from:", signer.address);

    const alphaAddress = "0xC7dc7347F4fF5cbfFbdADed28B08E73A5ee495bc"; // replace with actual
    const AlphaToken = await ethers.getContractFactory("AlphaToken");
    const alpha = AlphaToken.attach(alphaAddress);

    const amount = ethers.utils.parseUnits("100", 18); // v5 way
    const tx = await alpha.mint(signer.address, amount);
    await tx.wait();

    console.log(`Minted ${amount.toString()} ALPHA to ${signer.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
