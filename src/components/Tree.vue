<template>
  <ul class="tree">
    <tree-item v-for="tree in treeList" v-bind:item="tree"></tree-item>
  </ul>
</template>

<script>
  import TreeItem from './TreeItem'
  import store from '../store'

  export default {
    computed: {
      treeList() {
        return store.state.treeList
      }
    },
    components: {
      TreeItem
    }
  }
</script>