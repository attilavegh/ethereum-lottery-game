async function main() {
    const lotteryGame = await ethers.getContractFactory("LotteryGame");

    console.log("Deploying the Lottery Game...");
    
    const lotteryGameDeployment = await lotteryGame.deploy();
    await lotteryGameDeployment.deployed();
    
    console.log("Lottery game deployed to:", lotteryGameDeployment.address);
}
  
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });