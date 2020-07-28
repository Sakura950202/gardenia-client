<template>
  <div class="wrapper">
      这里是登录页面
      <div>
        <button @click="doLogin">跳转首页</button>
      </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    doLogin() {
      this.$router.push({path: '/index'})
    }
  }
}
</script>
<style lang="scss" scoped>

</style>