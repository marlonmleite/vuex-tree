import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    treeList: []
  },
  mutations: {
    RECEIVE_LIST(state, params) {
      state.treeList = params.list
    },
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