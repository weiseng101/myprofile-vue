<template>
  <HeaderLayout/>

  <div class="test-section">
    <h1>Test Page</h1>

    <h2>{{ number }}</h2>
    <button @click="clickButton">Click It</button>

    <button class="big-button" @click="increaseCount">
      <span>Click 222</span>
    </button>
    <a-divider/>

    <a-button type="primary" @click="goHome">Back Home</a-button>
    <button @click="GoTo">Go Back</button>

    <div class="big-div" data-aos="fade-up"></div>
  </div>
</template>

<script>
/* eslint-disable */
import {defineComponent, ref} from "vue";
import HeaderLayout from "@/components/headerLayout";

export default defineComponent({
  name: "testView.vue",
  components: {
    HeaderLayout
  },
  props: {
    msg: String
  },
  methods: {
    GoTo() {
      this.$router.back();
    },
    goHome() {
      this.$router.replace('/');
    },
    increaseCount(n) {
      this.number += 1;
    }
  },
  setup() {
    const number = ref(1);

    const clickButton = () => {
      number.value++;
    }


    return {
      number,
      clickButton
    }
  }
})

</script>

<style scoped lang="scss">
.big-button {
  span {
    color: blue;
  }
}

.test-section{
  background: rgba(188, 45, 144, 0.4);
  display: block;
  height: calc(100vh - 60px);
  width: calc(100vw);
}


.big-div {
  width: 500px;
  height: 200px;
  background: mediumpurple;
}
</style>