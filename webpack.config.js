module.exports = {
  entry: {
    app: './src/app'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'handlebars'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          "presets": ["es2015"]
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.html', '.scss']
  },
  devServer: {
    contentBase: 'example',
    port: process.env.PORT
  }
};
