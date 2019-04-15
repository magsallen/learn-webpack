const path = require('path');

module.exports = {
  mode: 'development',
  entry: './start.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'start.bundle.js'
	},
	resolve: { extensions: [ '.js', '.jsx', '.scss' ] }, // enables bare imports (without the .ext)
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' }, // babel webpack plugin - transpile js files with babel
			{ test: /\.(css|scss)$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader'] } // babel webpack plugin - transpile scss
		]
	},
	devtool: 'eval-source-map'
};
