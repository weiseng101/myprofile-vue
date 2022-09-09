<template>

  <HeaderLayout />

  <div class="md5-page">
    <h1>Md5 Online.</h1>


    <div style="width:100%;">


      <a-space :size="size">
        <a-input v-model:value="value" placeholder="Enter String to Encrypt." />

        <a-button @click="generateRandom" type="ghost">Generate</a-button>

        <div v-if="amount > 0">Attempted: {{amount}}</div>
      </a-space>

      <div v-if="answer != ''" class="result-div">
        <p>MD5 String：</p>
        <p class="result-p">{{ answer }}</p>
      </div>

    </div>
  </div>

</template>

<script>
/* eslint-disable */
import {ref, defineComponent} from "vue";
import randomInteger from 'random-int';
import HeaderLayout from "@/components/headerLayout";
import {Md5} from "ts-md5"

export default defineComponent({
  name: "randomView.vue",
  components: {
    HeaderLayout
  },
  setup() {
    const size = ref(20);

    const value = ref('');

    const answer = ref('');

    const amount= ref(0);

    const generateRandom = () => {
      const string= value.value;
      const finalMd5= Md5.hashStr(string);

      amount.value++;

      answer.value = finalMd5;

      console.log("ok");
    };

    return {
      size,
      generateRandom,
      value,
      answer,
      amount
    }
  }
})
</script>

<style scoped lang="scss">
.md5-page {
  background: rgba(35, 64, 121, 0.7);
  display: block;
  height: calc(100vh - 60px);
  width: calc(100vw);
}

.result-div {
  font-size: 18px;

  .result-p {
    font-size: 28px;
    display:block
  }

}

h1 {
  text-align: center;
  width: 100%;
  display: block;
}

</style>