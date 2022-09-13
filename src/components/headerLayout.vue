<template>
  <a-layout-header :style="headerStyle" class="header-section">

    <Slide width="300">
      <a id="home" @click="openPage()">
        <span>Random Int</span>
      </a>
      <a id="home" href="/md5">
        <span>MD5 String</span>
      </a>
    </Slide>

    <a-menu
        v-show="isWeb"
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        :style="menuStyle"
    >
      <a-menu-item key="1">
        <router-link to="/test">Test Page</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/todo">ToDo List</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/random">Random Page</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/md5">MD5 Page</router-link>
      </a-menu-item>
    </a-menu>

    <div>
      <a-button @click="goBack()">GoBack</a-button>
    </div>

  </a-layout-header>
</template>

<script>
/* eslint-disable */
import {ZhihuCircleFilled} from "@ant-design/icons-vue";
import {Slide} from "vue3-burger-menu";
import {ref, defineComponent} from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'HeaderLayout',
  components: {
    Slide,
  },
  setup() {
    const routing= useRouter();

    const selectedKeys = ref('');
    const headerStyle = {
      background: 'lightblue',
      height: '60px'
    };

    const isWeb = ref(window.innerWidth > 769 ? true : false)

    const menuStyle = {
      lineHeight: '60px',
      background: 'lightblue',
      float: 'right'
    }

    const openPage = () => {
      routing.push('/random');
    }

    const goBack = () =>{
      routing.back();
    }


    return {
      selectedKeys,
      headerStyle,
      menuStyle,
      isWeb,
      openPage,
      goBack
    }

  }
})
</script>

<style scoped>

</style>