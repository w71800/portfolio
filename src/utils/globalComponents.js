// 在這邊執行全域元件的註冊
// 為什麼是用 install？
import Vue from 'vue'
import Card from '@/base/Card.vue'
import Description from '@/base/Description.vue'

const plugin = {
  install(Vue){
    Vue.component('Card',Card)
    Vue.component('Description',Description)
  }
}

export default plugin