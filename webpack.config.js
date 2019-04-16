const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
		main: './src/index.js',
		styles: './styles/shared.scss'
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
	},
	resolve: { extensions: [ '.js', '.jsx', '.scss' ] }, // enables bare imports (without the .ext)
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' }, // babel webpack plugin - transpile js files with babel
			{ test: /\.(css|scss)$/, exclude: /node_modules/, use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'] } // babel webpack plugins - transpile scss to css
		]
	}
};
