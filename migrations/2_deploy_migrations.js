var Asset = artifacts.require("../contracts/Asset.sol");
var AssetTrade = artifacts.require("../contracts/AssetTrade.sol");
var AssetSeries = artifacts.require("../contracts/AssetSeries.sol");
var AssetSeriesRegistry = artifacts.require("../contracts/AssetSeriesRegistry.sol");

module.exports = function (deployer) {
  deployer.deploy(Asset);
  deployer.deploy(AssetTrade);
  deployer.deploy(AssetSeries);
  deployer.deploy(AssetSeriesRegistry);
}