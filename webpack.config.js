const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/index.ts',
  target: 'web',
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    globalObject: 'this',
    library: '@dariadia/danni-kit',
  },
  externals : {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'styled-components': 'commonjs styled-components',
    'styled-system': 'commonjs styled-system'
  },
  stats: {
    logging: 'verbose'
  },
  plugins: [
    process.env.ANALYZE === 'true' && new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'silent',
    })
  ].filter(Boolean),
};
