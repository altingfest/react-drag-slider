const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  entry: [
    `./src/${pkg.name}.jsx`,
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${pkg.name}.js`,
    library: pkg.name,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env', 'babel-preset-react'],
            }
          }
        ]
      },
      {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : [
            'css-loader',
            'sass-loader'
          ]
        })
      },
    ]
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `${pkg.name}.css`,
    }),
  ],
};