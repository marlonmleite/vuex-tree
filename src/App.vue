<template>
  <div id="app">
    <section>
      <header class="header">
        <input type="text" placeholder="New item" @keyup.enter="addItem">
      </header>
      <section class="main">
        <tree></tree>
      </section>
    </section>
  </div>
</template>

<script>
  import Tree from './components/Tree'

  export default {
    name: 'app',
    components: {
      Tree
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