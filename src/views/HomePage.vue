<template>

  <HeaderLayout />

  <section class="home-section">

    <a class="icon-link" href="https://www.zhihu.com/people/huang-wei-cheng-25" target="_blank">
      <ZhihuCircleFilled class="icon-item"/>
    </a>

    About Me.

  </section>

</template>

<script>
/* eslint-disable */
import {
  DeleteFilled,
  LeftCircleTwoTone,
  LoadingOutlined,
  UploadOutlined,
  UserOutlined,
  ZhihuCircleFilled
} from "@ant-design/icons-vue";
import {defineComponent, ref} from "vue";
import {Slide} from 'vue3-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
import HeaderLayout from "../components/headerLayout"

export default defineComponent({
  name: "HomePage.vue",
  components: {
    ZhihuCircleFilled,
    Slide,
    HeaderLayout
  },
  setup() {
    const selectedKeys = ref('');
    const headerStyle = {
      background: 'lightblue',
      height: '60px'
    };

    const menuStyle = {
      lineHeight: '64px',
      background: 'lightblue'
    }


    return {
      selectedKeys,
      headerStyle,
      menuStyle
    }

  }
})
</script>

<style type="scss">
.home-section {
  background: rgba(100, 255, 125);
  display: flex;
  height: calc(100vh - 60px);
  width: calc(100vw);

}

.icon-item {
  font-size: 24px;
}

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 12px;
  top: 15px;
  cursor: pointer;
}

.icon-link {
  color: black;
}

.icon-link:hover {
  color: rgba(0, 0, 0, 0.8);
}

</style>