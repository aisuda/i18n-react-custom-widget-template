module.exports = {
  entry: {
    dir: './src/widget'
  },
  file: {
    test: /.*(ts|tsx|js|jsx)$/
  },
  ignore: {
    sameGit: true,
    list: ['src/assets', 'src/locale']
  },
  importInfo: {
    source: 'i18n-runtime',
    imported: 'i18n',
    local: '_i18n'
  },
  i18nModule: 'i18n-runtime',
  languages: [
    {
      name: 'en-US',
      path: './src/locale'
    },
    {
      name: 'zh-CN',
      path: './src/locale'
    }
  ],
  output: {
    fileName: 'custom-widget-i18n',
    fileExtension: 'xlsx',
    path: './'
  },
  // 机器自动翻译：需要配置对应的appId、key
  translate: {
    appId: '',
    key: '',
    host: 'http://api.fanyi.baidu.com'
  }
};
