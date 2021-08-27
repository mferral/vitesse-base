<script setup lang="ts">
import {
  DownOutlined,
  LogoutOutlined,
  MenuOutlined,
} from '@ant-design/icons-vue'
// @ts-ignore
const visible = ref<boolean>(false)

const afterVisibleChange = (bool: boolean) => {
  // console.log('visible', bool)
}

const showDrawer = () => {
  visible.value = true
}
</script>
<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }" class="layout-navbar">
    <a-row>
      <a-col :span="12">
        <MenuOutlined @click="showDrawer" />
      </a-col>
      <a-col :span="12" class="text-right">
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
                <a href="javascript:window.location ='/login';">
                  <LogoutOutlined />
                  Logout
                </a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </a-layout-header>
  <a-drawer
    v-model:visible="visible"
    title="Menu Drawer"
    placement="right"
    :closable="false"
    :after-visible-change="afterVisibleChange"
  >
    <p>Item...</p>
    <p>Item...</p>
    <p>Item...</p>
  </a-drawer>
</template>

<style>
.layout-navbar{
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
}
</style>
