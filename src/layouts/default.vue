
<template>
  <a-layout>
    <layout-sider />
    <a-layout>
      <layout-header />
      <a-layout-content
        :style="{ margin: '84px 16px 16px 216px', padding: '24px', background: '#fff', minHeight: '280px' }"
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
.layout-navbar{
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  text-align: right;
}

</style>
