# 价格输入框组件
> 带有固定前缀的输入框组件，一般用于居中样式，但是有前缀不可删除的情况

## 使用方法：
### 直接采用
引入demo/index.js,调用
`
//input对象，前缀文字，小数点后的精确位数
priceInput(document.getElementById('input'),'¥',2);
`
### npm 安装
`
npm install price-input
`
使用：
`
var priceInput = require('price-input');
//input对象，前缀文字，小数点后的精确位数
priceInput(document.getElementById('input'),'¥',2);
`

