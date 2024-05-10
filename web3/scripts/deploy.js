const hre = require("hardhat");

async function main() {
  const VotingContract = await hre.ethers.getContractFactory("VotingContract");
  const voting_contract = await VotingContract.deploy();

  await voting_contract.deployed();

  console.log("Lock with 1 ETH deployed to:", voting_contract.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
