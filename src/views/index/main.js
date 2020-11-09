import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/styles/index.scss'
import '@/icons'
import axios from 'axios'
import Tinymce from '@/components/tinymce/index.vue'

Vue.component('tinymce', Tinymce)

Vue.config.productionTip = false
Vue.prototype.$axios = axios



(function (KDApi) {
  function MyComponent (model) {
    this._setModel(model)
  }

  MyComponent.prototype = {
    _setModel: function (model) {
      this.model = model
    },
    init: function (props) {
      console.log('-----init', this.model.style, props)
      setHtml(this.model, props)
    },
    update: function (props) {
      console.log('-----update', this.model, props)
      setHtml(this.model, props)
    },
    destoryed: function () {
      console.log('-----destoryed', this.model)
    }
  }

  const setHtml = (model, props) => {
    const todoListData = props.data ? props.data.todoListData : []
    KDApi.loadFile(['./css/index.css','./css/parser-example.css'], model, () => { 
      new Vue({
        router,
        render: h => h(App),
        methods: {
          invoke: function (eventName, args) {
            invoke(eventName, args)
          },
          addTodo: function (trimmedText) {
            if (trimmedText) {
              this.todoListData.push({
                id: this.nextTodoId++,
                text: trimmedText
              })
            }
          },
          removeTodo: function (idToRemove) {
            this.todoListData = this.todoListData.filter(todo => {
              return todo.id !== idToRemove
            })
          }
        }
      }).$mount('#app')
    })
  }

  // 注册自定义组件
  KDApi.register('lec-formbuilder-vue', MyComponent)
})(window.KDApi)
