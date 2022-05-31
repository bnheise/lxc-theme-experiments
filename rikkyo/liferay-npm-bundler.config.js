const defaultConfig = require("generator-liferay-fragments").getBundlerConfig();
defaultConfig.imports["__RXJS_PROVIDER__"] = { rxjs: "*" };
// defaultConfig.exports["sample-fragment"] =
//   "./sample-collection/sample-fragment/main.js";
// //defaultConfig.webpack.entry = ["./sample-collection/sample-fragment/main.js"];
// defaultConfig.webpack.optimization = {
//   usedExports: true,
//   sideEffects: true,
// };

// console.log(JSON.stringify(defaultConfig, null, 2));
module.exports = defaultConfig;
