<script setup lang="ts">
import { message } from 'ant-design-vue'
const info = () => {
  message.info('This is a normal message')
}
</script>

<template>
  <h1>Principal</h1>
  <a-button type="primary" @click="info">
    Button
  </a-button>
</template>
