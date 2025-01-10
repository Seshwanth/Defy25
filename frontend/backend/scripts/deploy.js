const { ethers } = require("ethers");
const fs = require("fs");

// Setup provider (Hardhat node)
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"); // This is the Hardhat node URL
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";  // Replace with your wallet private key

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

async function main() {
  // Display deployer address
  console.log("Deploying contracts with the account:", signer.address);

  // Load contract ABI and bytecode (after compiling it using Hardhat or Remix)
  const contractJson = JSON.parse(fs.readFileSync("./artifacts/contracts/FractionalNFTMarketplace.sol/FractionalNFTMarketplace.json"));
  const abi = contractJson.abi;
  const bytecode = contractJson.bytecode;

  // Create a ContractFactory
  const contractFactory = new ethers.ContractFactory(abi, bytecode, signer);
  
  // Deploy the contract
  const contract = await contractFactory.deploy(); // Set a higher gas limit if needed
  console.log("Contract deploying...");


  // Log the deployed contract address
  console.log("Contract deployed to:", contract.address);

  // Save the deployed contract address in a file
  const contractAddress = contract.address;
  fs.writeFileSync("./deployedAddress.json", JSON.stringify({ address: contractAddress }));

  console.log("Deployed contract address saved to ./deployedAddress.json");
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
