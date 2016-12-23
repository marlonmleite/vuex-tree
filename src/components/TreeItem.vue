<template>
  <li class="tree-item">
    <div v-on:click.prevent="toggleItem" v-bind:class="{'need-expand': (isFolder && !isOpen)}">
      {{ item.label }}
      <span class="expand" v-if="isFolder">+</span>
      <span class="delete" v-on:click.prevent.stop="deleteItem">x</span>
    </div>
    <ul v-if="isFolder" v-show="isOpen">
      <tree-item v-for="child in item.children" v-bind:item="child" v-bind:parent="item.children"></tree-item>
    </ul>
  </li>
</template>

<script>
  import store from '../store'

  export default {
    name: 'tree-item',
    props: {
      item: Object,
      parent: Array
    },
    data: function () {
      return {
        isOpen: false
      }
    },
    computed: {
      isFolder: function () {
        return this.item.children && this.item.children.length > 0
      }
    },
    methods: {
      toggleItem: function () {
        if (this.isFolder) {
          this.isOpen = !this.isOpen
        }
      },
      deleteItem() {
        store.commit('REMOVE_ITEM', { parent: this.parent, item: this.item })
      }
    }
  }
</script>

<style>
  .tree-item {
    padding: 5px;
    color: #aaa;
    font-weight: bold
  }

  .tree-item div:hover {
    cursor: pointer;
  }

  .tree-item .delete {
    background-color: #ff7272;
    color: #fff;
    padding: 3px;
    border-radius: 100%;
    width: 18px;  
    height: 18px;
    line-height: 18px;
    text-align: center;
    display: inline-block;
  }

  .tree-item .expand {
    width: 10px;
    display: inline-block;
  }

  .tree-item > div.need-expand {
    color: #666;
  }
</style>