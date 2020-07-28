<template>
  <div id="app">
    <!-- router-view标签用来定义vue组件的显示。即每次做展示都是这个标签，但是里面内容不同，通过路由来调组件展示 -->
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
