module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/main.js',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist/js`,
    // 出力ファイル名
    filename: 'main.js'
  },
};
