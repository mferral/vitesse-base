<script setup lang="ts">
import { useCatsStore } from '~/stores/cats'
const cats = useCatsStore()
</script>

<template>
  <a-row type="flex">
    <a-col
      v-for="(cat, index) in cats.getCats"
      :key="index"
      :span="4"
      :xs="24"
      :sm="12"
      :md="4"
    >
      <a-card hoverable :title="`Gato ${String(index)}`" style="min-height: 300px;">
        <template #cover style="min-height: 250px;">
          <a-image
            :src="cat['url']"
          >
            <template #placeholder>
              <a-image
                style="height: 100%; width: 100%;"
                src="https://loginportal.funnyjunk.com/pictures/Funny+title_a8be8b_7919212.jpg"
                :preview="false"
              />
            </template>
          </a-image>
        </template>
        <a-card-meta :title="cat['id']">
          <template #description>
            www.instagram.com
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<style>
    .ant-image-img {
        width: 100%;
        height: 250px;
    }
</style>
