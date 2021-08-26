<script setup lang="ts">
import {
  DownOutlined,
} from '@ant-design/icons-vue'

</script>
<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }" class="layout-navbar">
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        Profile
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>
