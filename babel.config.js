module.exports = function (api) {
  api.cache(true);

	return {
    presets: [
      [
        '@babel/preset-env',
        {
          "useBuiltIns": false
        }
      ],
      '@babel/preset-react'
    ],
    plugins: ["@babel/plugin-transform-runtime"]
  };
}
