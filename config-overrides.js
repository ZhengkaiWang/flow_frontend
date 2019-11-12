const { override, fixBabelImports, addBundleVisualizer } = require('customize-cra');

 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
   addBundleVisualizer({
    analyzerMode: 'server',
  }),
  (config) => {
    config.module.rules.push({
      loader: 'webpack-ant-icon-loader',
      enforce: 'pre',
      include: [
        require.resolve('@ant-design/icons/lib/dist')
      ]
    });
    return config;
  },
 );