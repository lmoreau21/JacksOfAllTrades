var config = require('./webpack.config.js.js');

var entry = {
	'aws-amplify-xr': './lib-esm/index.js',
};
module.exports = Object.assign(config, { entry, mode: 'development' });
