<template>
    <div class="interlock">
      <h1>This is an interlock page</h1>
    </div>
  </template>

  <script setup lang="ts" name="Interlock">
    import {onMounted,onUnmounted} from 'vue'

    onMounted(()=>{
      console.log('interlock组件挂载了')
    })
    onUnmounted(()=>{
      console.log('interlock组件卸载了')
    })
  </script>

  <style scoped>
  .interlock {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
  }
  </style>
