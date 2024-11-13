module.exports = {
  plugins: {
    rootValue: 37.5, // 设计稿基准大小
    propList: ['*'], // 需要转换的属性，*表示都转
    unit_precision: 5, // rem 小数点后精度
    minPixelValue: 2, // 小于这个值的px不会被转换
    selectorBlackList: ['.ignore'], // 不需要进行转换的类名
  }
}
