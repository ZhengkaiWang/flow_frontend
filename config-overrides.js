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
 );