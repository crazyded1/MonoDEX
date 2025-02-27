const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Разворачиваем UniswapV3Factory
  const Factory = await hre.ethers.getContractFactory("UniswapV3Factory");
  const factory = await Factory.deploy();
  await factory.deployed();
  console.log("UniswapV3Factory deployed to:", factory.address);

  // Разворачиваем SwapRouter
  const SwapRouter = await hre.ethers.getContractFactory("SwapRouter");
  const swapRouter = await SwapRouter.deploy(factory.address, deployer.address);
  await swapRouter.deployed();
  console.log("SwapRouter deployed to:", swapRouter.address);

  // Разворачиваем NonFungibleTokenPositionDescriptor
  const PositionDescriptor = await hre.ethers.getContractFactory("NonFungibleTokenPositionDescriptor");
  const positionDescriptor = await PositionDescriptor.deploy("0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37"); // Адрес WETH
  await positionDescriptor.deployed();
  console.log("NonFungibleTokenPositionDescriptor deployed to:", positionDescriptor.address);

  // Разворачиваем NonFungiblePositionManager
  const PositionManager = await hre.ethers.getContractFactory("NonFungiblePositionManager");
  const positionManager = await PositionManager.deploy(factory.address, "0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37", positionDescriptor.address); // Адрес WETH
  await positionManager.deployed();
  console.log("NonFungiblePositionManager deployed to:", positionManager.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
