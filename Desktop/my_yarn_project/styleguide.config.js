module.exports = {
    webpackConfig: {
      module: {
        rules: [
          // Babel loader will use your project’s babel.config.js
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          // Other loaders that are needed for your components
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    },
    ignore: ["**/helpers**","**/styled**","**/__test__/**","**/*.test.{js,jsx,ts,tsx}","**/*.spec.{js,jsx,ts,tsx}","**/*.d.ts"],
  }