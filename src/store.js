import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const data = [
  {
    label: 'Financeiro',
    children: [
      { label: 'Contas a pagar' },
      { label: 'Contas a receber' },
      { label: 'Sem classificação', children: [{ label: 'Energia' }] }
    ]
  },
  { label: 'Infra' },
  { label: 'Desenvolvimento', children: [{ label: 'Java' }, { label: 'Javascript' }] }
]

const store = new Vuex.Store({
  state: {
    treeList: data
  },
  mutations: {
    ADD_ITEM(state, params) {
      state.treeList.push(params.item)
    },
    REMOVE_ITEM(state, params) {
      const parent = params.parent ? params.parent : state.treeList

      parent.splice(parent.indexOf(params.item), 1)
    }
  },
  strict: true
})

export default store