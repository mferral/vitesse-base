<script setup lang="ts">
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
// @ts-ignore
const current = ref<string[]>(['mail'])
</script>
<template>
  <h1>Chidren</h1>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail" @click="$router.push('/children')">
      <template #icon>
        <mail-outlined />
      </template>
      Navigation One
    </a-menu-item>
    <a-menu-item key="child1" @click="$router.push('/children/child1')">
    </a-menu-item>
    <a-menu-item key="child2" @click="$router.push('/children/child2')">
      Child 2
    </a-menu-item>
    <a-menu-item key="app" disabled>
      <template #icon>
        <appstore-outlined />
      </template>
      Navigation Two
    </a-menu-item>
    <a-sub-menu>
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>
        Navigation Three
      </template>
      <a-menu-item-group title="Item 1">
        <a-menu-item key="setting:1">
          Option 1
        </a-menu-item>
        <a-menu-item key="setting:2">
          Option 2
        </a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="Item 2">
        <a-menu-item key="setting:3">
          Option 3
        </a-menu-item>
        <a-menu-item key="setting:4">
          Option 4
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-menu-item key="alipay">
      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </a-menu-item>
  </a-menu>
  <router-view />
</template>
