<template>
    <div class="contacts">
      <h1>This is an Contacts page</h1>
    </div>
  </template>

  <script setup lang="ts" name="Contacts">
    import {onMounted,onUnmounted} from 'vue'

    onMounted(()=>{
      console.log('Contacts组件挂载了')
    })
    onUnmounted(()=>{
      console.log('Contacts组件卸载了')
    })
  </script>

  <style scoped>
  .contacts {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
  }
  </style>
