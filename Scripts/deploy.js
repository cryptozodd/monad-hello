async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("hello monad");
  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
