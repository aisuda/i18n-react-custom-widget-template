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
    },
    {
      name: 'ru-RU',
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
    appId: '20230324001613652', // 请在百度翻译开发平台申请：http://api.fanyi.baidu.com/manage/developer
    key: 'Sprp7Mz8_yydeyhYrgE0', // 个人翻译资源权限，请勿频繁使用
    host: 'http://api.fanyi.baidu.com'
  }
};
