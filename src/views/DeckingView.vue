<template>
    <div class="decking">
      <h1>This is an decking page</h1>
    </div>
  </template>

  <script setup lang="ts" name="Decking">
    import {onMounted,onUnmounted} from 'vue'

    onMounted(()=>{
      console.log('decking组件挂载了')
    })
    onUnmounted(()=>{
      console.log('decking组件卸载了')
    })
  </script>

  <style scoped>
  .decking {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
  }
  </style>
