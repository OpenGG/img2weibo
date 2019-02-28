const rewireStyl = require("react-app-rewire-stylus-modules");

const rewireOuput = (config, env) => ({
  ...config,
  output: {
    ...config.output,
    publicPath: '',
  },
});

const override = (config, env) => {
  // do stuff with the webpack config...

  config = rewireOuput(config, env);

  config = rewireStyl(config, env);

  return config;
}

module.exports = override;
