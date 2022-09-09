<template>
  <a-layout-header :style="headerStyle" class="header-section">

    <Slide width="300">
      <a id="home" href="/random">
        <span>Random Int</span>
      </a>
      <a id="home" href="/md5">
        <span>MD5 String</span>
      </a>
    </Slide>

    <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        :style="menuStyle"
    >
      <a-menu-item key="1">
        <router-link to="/test">Test Page</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/date">Date Page</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/random">Random Page</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/md5">MD5 Page</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
/* eslint-disable */
import {ZhihuCircleFilled} from "@ant-design/icons-vue";
import {Slide} from "vue3-burger-menu";
import {ref, defineComponent} from "vue";

export default defineComponent({
  name: 'HeaderLayout',
  components: {
    Slide,
  },
  setup() {
    const selectedKeys = ref('');
    const headerStyle = {
      background: 'lightblue',
      height: '60px'
    };

    const menuStyle = {
      lineHeight: '60px',
      background: 'lightblue',
      float: 'right'
    }


    return {
      selectedKeys,
      headerStyle,
      menuStyle
    }

  }
})
</script>

<style scoped>

</style>