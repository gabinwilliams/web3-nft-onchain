const { deployments, ethers } = require("hardhat");
const fs = require("fs");

module.exports = async({
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = await getChainId()

    log("--------------------------")
    const SVGNFT = await deploy("SVGNFT", {
        from: deployer,
        log: true
    })
    log(`You have deployed an NFT contract to ${SVGNFT.address}`)
    let filepath = './img/circle.svg'
    let svg = fs.readFileSync(filepath, {encoding: "utf8"})

    const svgNFTContract = await ethers.getContractFactory("SVGNFT")
}