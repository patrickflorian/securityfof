module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
  	// ... some other plugins
    [
      'module-resolver',
      {
        root: ["./src"],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '@classes/*': './classes/*',
          '@components/*': './components/*',
          '@constants/*': './constants/*',
          '@context/*': './context/*',
          '@helpers/*': './helpers/*',
          '@locales/*': './locales/*',
          '@res/*': './res/*',
          '@routes/*': './routes/*',
          '@screens/*': './screens/*',
          '@services/*': './services/*',
          '@store/*': './store/*',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
        exclude: ['node_modules'],
        include: ["src"]
      },
    ],
  ],
};
