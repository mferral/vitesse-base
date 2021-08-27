<script setup lang="ts">
import { useCatsStore } from '~/stores/cats'
const cats = useCatsStore()
cats.listCats()
</script>
<template>
  <h1>Page 2</h1>
  <a-button type="primary" @click="cats.moreCats">
    More Cats
  </a-button>
  <table-cats />
</template>
