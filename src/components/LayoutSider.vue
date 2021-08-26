<script setup lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue'
// @ts-ignore
const router = useRouter()
const page = router.currentRoute.value.path
// @ts-ignore
const selectedKeys = ref < string[] > ([page])
</script>
<template>
  <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', zIndex: 2, left: 0 }" class="hide-mobile">
    <div class="layout-profile">
      <a-avatar
        :size="100"
        src="https://png2.cleanpng.com/sh/71a8cb2a08e6edfd6ab2a30f186fb26f/L0KzQYm3VMI3N5dofZH0aYP2gLBuTfJwfZ9phNd8cz3vf7j2TfNwdaFmhus2YoLkfrW0gBhqbZcyfepuY4X3ecfsTcVibWJrS9VrN3PpcoK5TsY5QWQ7Tqg6MUW1RIi8V8Q2OWY2Sas3cH7q/kisspng-boundless-logo-company-brand-chief-executive-5ae1f3cb7cfb12.6893666115247574515119.png"
      />
    </div>
    <a-menu v-model:selected-keys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="/" @click="$router.push('/')">
        <user-outlined />
        <span> nav 1</span>
      </a-menu-item>
      <a-menu-item key="/page-2" @click="$router.push('/page-2')">
        <video-camera-outlined />
        <span> nav 2</span>
      </a-menu-item>
      <a-menu-item key="/children" @click="$router.push('/children')">
        <upload-outlined />
        <span> nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
