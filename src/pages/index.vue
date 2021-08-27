<script setup lang="ts">
import { message } from 'ant-design-vue'
import { useCounterStore } from '~/stores/counter'
const info = () => {
  message.info('This is a normal message')
}
const counter = useCounterStore()
</script>

<template>
  <h1>Principal</h1>
  <a-button type="primary" @click="info">
    Button
  </a-button>

  <h1>Increment</h1>
  <h3>Counter : {{ counter.getCounter }}</h3>
  <a-button type="primary" @click="counter.incrementCounter">
    Increment
  </a-button>
</template>
