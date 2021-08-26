<template>
  <a-layout-content>
    <div class="layout-login">
      <div class="header">
        <a href="/">
          <img src="https://preview.pro.antdv.com/assets/logo.f3103225.svg" alt="logo" class="logo">
          <span class="title">Ant Design</span>
        </a>
      </div>
      <div class="desc">
        Ant Design is the most influential web design specification in Xihu district
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </a-layout-content>
</template>

<style>
.layout-login{
  padding: 128px 0 24px;
  text-align: center;
}

.layout-login .header{
    height: 44px;
    line-height: 44px;
}
.layout-login .header .logo {
    height: 44px;
    vertical-align: top;
    margin-right: 16px;
    border-style: none;
}

.layout-login .header .title{
    font-size: 33px;
    color: rgba(0,0,0,.85);
    font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
}

.layout-login .desc {
    font-size: 14px;
    color: rgba(0,0,0,.45);
    margin-top: 12px;
    margin-bottom: 40px;
}

.layout-login .main {
    min-width: 260px;
    width: 260px;
    margin: 0 auto;
}
</style>
