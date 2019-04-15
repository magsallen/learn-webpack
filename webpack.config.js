const path = require('path');

module.exports = {
  mode: 'development',
  entry: './start.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'start.bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' } // babel webpack plugin - transpile js files with babel
		]
	},
	devtool: 'eval-source-map'
};
