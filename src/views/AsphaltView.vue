<template>
    <div class="asphalt">
      <h1>This is an Asphalt page</h1>
    </div>
  </template>

  <script setup lang="ts" name="Asphalt">
    import {onMounted,onUnmounted} from 'vue'

    onMounted(()=>{
      console.log('Asphalt组件挂载了')
    })
    onUnmounted(()=>{
      console.log('Asphalt组件卸载了')
    })
  </script>

  <style scoped>
  .asphalt {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
  }
  </style>
