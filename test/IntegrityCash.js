var IntegrityCash = artifacts.require("./IntegrityCash.sol");

contract('IntegrityCash', function(accounts) {

	it('sets the total supply upon deployment', function() {
		return IntegrityCash.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 200000000, 'sets the total supply to 200,000,000');
		});
	});
})