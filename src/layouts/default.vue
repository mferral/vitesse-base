
<template>
  <a-layout>
    <layout-sider />
    <a-layout>
      <layout-header />
      <a-layout-content
        :style="{ padding: '24px', background: '#fff', minHeight: '280px' }"
        class="margin-layout-mobile margin-layout-desktop"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>

  .layout-profile {
    text-align: center;
    padding: 20px 0;
}
</style>
