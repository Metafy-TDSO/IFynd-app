module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      'inline-dotenv',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~assets': './assets',
            '^~(.+)': './src/\\1'
          },
          extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.tsx', '.ts', '.native.js']
        }
      ]
    ]
  }
}
