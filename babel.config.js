const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        debug: !!PRODUCTION_MODE
      }
    ]
  ],
  env: {
    lib: {
      presets: [
        [
          '@babel/preset-env',
          {
            debug: !!PRODUCTION_MODE,
            useBuiltIns: 'usage',
            corejs: 3,
            modules: false,
            loose: true
          }
        ]
      ]
    }
  }
};
