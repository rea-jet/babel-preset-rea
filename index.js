module.exports = function () {
  return {
    plugins: [
      require.resolve('@babel/plugin-transform-modules-commonjs'),
      [
        require.resolve('@babel/plugin-proposal-decorators'),
        { decoratorsBeforeExport: true },
      ],
      require.resolve('@babel/plugin-proposal-class-properties'),
      require.resolve('@babel/plugin-transform-exponentiation-operator'),
      require.resolve('@babel/plugin-proposal-function-bind'),
      require.resolve('@emotion/babel-plugin'),
      [
        require.resolve('babel-plugin-named-asset-import'),
        {
          loaderMap: {
            svg: {
              ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
            },
          },
        },
      ],
    ],
  };
};
