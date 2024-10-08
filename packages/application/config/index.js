/* eslint-disable unicorn/prefer-module */
// eslint-disable-next-line import/no-commonjs
// const path = require('path');

const config = {
  projectName: 'taro-fast-application',
  date: '2021-12-30',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [['@tarojs/plugin-framework-react', { reactMode: 'concurrent' }]],
  copy: {
    patterns: [
      {
        from: 'src/sitemap.json',
        to: 'dist/sitemap.json',
      },
    ],
    options: {},
  },
  framework: 'react',
  alias: {
    '@tarojs/runtime': require.resolve('@tarojs/runtime'),
    // '@': path.resolve(__dirname, '..', 'src'),
  },
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false,
    },
  },
  cache: {
    enable: false,
  },
  mini: {
    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false, 如需使用 css modules 功能, 则设为 true
        config: {
          namingPattern: 'module', // 转换模式, 取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    // prerender: {
    //   match: ['pages/**', 'example/**', 'framework/**'],
    // },
  },
  h5: {
    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false, 如需使用 css modules 功能, 则设为 true
        config: {
          namingPattern: 'module', // 转换模式, 取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    devServer: {
      host: 'localhost',
      port: 8903,
    },
  },
};

export default function mergeConfig(merge) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line unicorn/prefer-module
    return merge({}, config, require('./dev'));
  }

  // eslint-disable-next-line unicorn/prefer-module
  return merge({}, config, require('./prod'));
}
