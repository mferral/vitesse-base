<script setup lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

</script>
<template>
  <a-form>
    <a-form-item>
      <a-input placeholder="Username">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input placeholder="Password" type="password">
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" block>
        Signin
      </a-button>
    </a-form-item>
  </a-form>
</template>

<route lang="yaml">
meta:
  layout: signin
</route>
