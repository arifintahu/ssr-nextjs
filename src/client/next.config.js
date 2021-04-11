const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  modifyVars: { 
    '@primary-color': '#ffec3d' 
  },
  lessVarsFilePath: './src/styles/variables.less',
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});