const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("First Token", function () {
  it("Should return new balance", async function () {
    const FirstCont = await ethers.getContractFactory("FirstContract");
    const token = await FirstCont.deploy();
    await token.mint();
    const accounts = await ethers.getSigners();
    console.log(accounts[0].address);
    const bal1 = await token.balanceOf("0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc");
    const bal2 = await token.balanceOf("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    expect(bal1).to.equal(bal2);
    const val1 = await token.transfer("0x70997970c51812dc3a010c7d01b50e0d17dc79c8",1000);
    const bal3 = await token.balanceOf("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    //expect(val1).to.equal(true);
    expect(bal3).to.equal(1000);
    //const Greeter = await ethers.getContractFactory("Greeter");
    //const greeter = await Greeter.deploy("Hello, world!");
    //await ethers.getSigners();

    //expect(await greeter.greet()).to.equal("Hello, world!");

    //const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
