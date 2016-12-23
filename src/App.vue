<template>
  <div id="app">
    <section>
      <header class="header">
        <input type="text" placeholder="New item" @keyup.enter="addItem">
      </header>
      <section class="main">
        <tree v-bind:list="treeList"></tree>
      </section>
    </section>
  </div>
</template>

<script>
  import Tree from './components/Tree'

  const treeList = [
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

  export default {
    name: 'app',
    components: {
      Tree
    },
    data() {
      return {
        treeList: treeList
      }
    },
    methods: {
      addItem(event) {
        let newItem = {
          label: (event.target.value || '').trim()
        }

        this.$store.commit('ADD_ITEM', { item: newItem })

        event.target.value = ''
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}

header input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>