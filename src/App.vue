<template>
<!--  <a-layout-header>Header</a-layout-header>-->

<!--  <router-view>-->
<!--  </router-view>-->

  <router-view v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </router-view>

<!--  <a-layout-footer>Footer</a-layout-footer>-->

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
