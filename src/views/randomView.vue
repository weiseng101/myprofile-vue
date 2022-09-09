<template>

  <HeaderLayout />

  <div class="random-page">

    <h1>Random Value.</h1>


    <div style="width:100%;">


      <a-space :size="size">
        <a-input-number id="inputNumber" v-model:value="minNum" :min="1" :max="100000"/>

        <a-input-number id="inputNumber" v-model:value="maxNum" :min="1" :max="100000"/>


        <a-button @click="generateRandom" type="ghost">Generate</a-button>

        <div v-if="amount > 0">Attempted: {{amount}}</div>
      </a-space>

      <div v-if="answer != 0" class="result-div">
        Your Number：<span>{{ answer }}</span>
      </div>

    </div>
  </div>

</template>

<script>
/* eslint-disable */
import {ref, defineComponent} from "vue";
import randomInteger from 'random-int';
import HeaderLayout from "@/components/headerLayout";

export default defineComponent({
  name: "randomView.vue",
  components: {
    HeaderLayout
  },
  setup() {
    const size = ref(20);

    const minNum = ref(1);
    const maxNum = ref(2);

    const answer = ref(0);

    const amount= ref(0);

    const generateRandom = () => {
      const num1= minNum.value;
      const num2= maxNum.value;

      const finalNumber= randomInteger(num1, num2);

      amount.value++;

      answer.value = finalNumber;

      console.log("ok");
    };

    return {
      size,
      generateRandom,
      minNum,
      maxNum,
      answer,
      amount
    }
  }
})
</script>

<style scoped lang="scss">
.random-page {
  background: rgba(13, 13, 144, 0.5);
  display: block;
  height: calc(100vh - 60px);
  width: calc(100vw);
}

.result-div {
  font-size: 24px;

  span {
    font-size: 48px;
  }

}

h1 {
  text-align: center;
  width: 100%;
  display: block;
}

</style>