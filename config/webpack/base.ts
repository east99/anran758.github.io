import path from 'path';
import { CustomConfig } from './config.d';

const projectPaths: CustomConfig = {
  // 源码目录
  sourceRoot: path.resolve(__dirname, '../../src'),
  // 构建后输出目录
  buildRoot: path.resolve(__dirname, '../../dist'),
  // 静态资源根目录
  staticDir: 'static',
};

const baseConfig: CustomConfig = {
  ...projectPaths,

  entry: { index: path.join(projectPaths.sourceRoot, 'index') },
  publicPath: '/',

  // 公用别名
  commonAlias: {
    '@': path.resolve(projectPaths.sourceRoot),
    images: path.resolve(projectPaths.sourceRoot, 'images'),
    static: path.resolve(projectPaths.sourceRoot, 'static'),
  },

  template: 'index.html',

  externals: {},

  favicon: '',

  banner: 'Copyright (c) 2020-present anran758',

  // cdn 配置
  // cdn: {
  //   accessKey: '',
  //   secretKey: '',
  //   bucket: '',
  //   origin: '',
  //   uploadURL: '',
  // },

  // 要打包的外部资源库
  library: ['react'],
};

export default baseConfig;
