var IntegrityCash = artifacts.require("./IntegrityCash.sol");

module.exports = function(deployer) {
  deployer.deploy(IntegrityCash);
};
