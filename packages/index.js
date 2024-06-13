import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import './style/fonts/font.scss'

const components = [
  Button,
  Dialog,
  Input
]

const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，如果是，就不调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
