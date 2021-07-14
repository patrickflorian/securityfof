module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
  	// ... some other plugins
    [
      'module-resolver',
      {
        
        "root": [
          "./src"
        ],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '@classes': './src/classes',
          '@components': './src/components',
          '@constants': './src/constants',
          '@context': './src/context',
          '@helpers': './src/helpers',
          '@locales': './src/locales',
          '@res': './src/res',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
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
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
