import webpack from 'webpack';
import path from 'path';

const production = process.env.NODE_ENV === 'production';
module.exports = {
  devtool: 'source-map',
  module: {
    noParse: ['ws'],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  entry: {
    bot: ['babel-polyfill', path.join(__dirname, 'src', 'botPage')],
    index: path.join(__dirname, 'src', 'indexPage'),
  },
  externals: ['ws'],
  output: {
    filename: production ? '[name].min.js' : '[name].js',
    sourceMapFilename: production ? '[name].min.js.map' : '[name].js.map',
  },
  plugins: production && [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      minimize: true,
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};
