<template>
    <div class="fencing">
      <h1>This is an fencing page</h1>
    </div>
  </template>

  <script setup lang="ts" name="Fencing">
    import {onMounted,onUnmounted} from 'vue'

    onMounted(()=>{
      console.log('Fencing组件挂载了')
    })
    onUnmounted(()=>{
      console.log('Fencing组件卸载了')
    })
  </script>

  <style scoped>
  .fencing {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
  }
  </style>
