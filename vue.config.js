module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'ABT Menuiserie',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  chainWebpack: config => {
      config.module.rules.delete('eslint');
    }
};
