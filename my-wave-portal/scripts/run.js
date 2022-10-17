const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deploy();
    console.log("Contrat deploye to:", waveContract.adress);
};

const runMain =async () => {
    try {
        await main();
        Process.exit(0); //exit node process without error
    }catch (error){
        console.log(error);
        process.exit(1); // Exit node process while indicating uncaugth fatal exception error
    }
      // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948

};