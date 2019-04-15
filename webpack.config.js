const path = require('path');

module.exports = {
  mode: 'development',
  entry: './start.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'start.bundle.js'
	},
	resolve: { extensions: [ '.js', '.scss' ] },
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: 'babel-loader' }, // babel webpack plugin - transpile js files with babel
			{ test: /\.(scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] } // babel webpack plugin - transpile scss
		]
	},
	devtool: 'eval-source-map'
};
