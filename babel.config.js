const PRODUCTION_MODE = process.env.NODE_ENV === "production"

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "debug": PRODUCTION_MODE ? true : false,
        "modules": false,
        "loose": true
      }
    ]
  ]
}
