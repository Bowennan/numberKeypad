# numberplate

[demo演示页面](https://bowennan.github.io/numberKeypad/dist/)

> a plugin for number plate
> usage
|属性及事件名称 | 说明 | 默认值 | 备注|
| - | :- | :- | :-: |
|actionp | 功能键 | String '.' | 除了 '.', 只能传入 '删除'， 实现删除功能，此时action属性需要传入 '清空'|
|action | 删除或者清空 | String '删除' | 只能传入 '清空'字段 |
|keyHeight | 按键高度 | String '48' | 此值同时影响按键高度以及按键上文字的行高 |
|fontSize| 按键文字字体大小 | String '18' | - |
|colorValue | 按键文字颜色 | String '#444444' 黑色 | 只控制文字颜色，其他颜色请自行修改覆盖 |
|RadiusNum | 按键圆角 | String '2' | - |
|marginHorizontal | 水平方向的间距 | Number 6 | - |
|outterWrapperWidth | 键盘整体宽度 | Number 330 | 宽度完全取决于外层父级宽度 |
|marginBottomValue | 每个按键下边距 | String '8' | - |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
