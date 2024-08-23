const hre = require("hardhat");

async function main() {

  const implementationAddress = "0xBC4403A8084ee8Ec6947a8ce5Bd8d75870094FE6"
  /**
   * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
   * @dev the second argument must be the message we want to set in the contract during the deployment process
   */
  const contract = await hre.ethers.deployContract("SwisstronikProxy", [implementationAddress,"Hello Swisstronik!!"]);

  await contract.deployed();

  console.log(`Swisstronik contract deployed to ${contract.address}`);
  
  
  await hre.run("verify:verify", {
    address: contract.address, // address of deployed contract
    constructorArguments: [implementationAddress, "Hello Swisstronik!!"], // constructor arguments
  });


}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});