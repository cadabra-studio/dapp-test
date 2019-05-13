var SimpleMessanger = artifacts.require("./SimpleMessanger.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleMessanger);
};
