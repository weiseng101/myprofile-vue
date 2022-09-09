<template>
  <div class="item-div">
    <h1>{{msg}}</h1>
    <span>THis is Component hehe</span>
    <h4>{{itemId}}</h4>
    <span>{{number}}</span>
  </div>

</template>

<script>
/* eslint-disable */
import { defineComponent, ref, watch} from "vue";

export default defineComponent({
  name: "itemComponent.vue",
  props:{
    // eslint-disable-next-line vue/require-prop-type-constructor
    msg: ''
  },
  setup(){
    const itemId= ref('1312321');

    const number = ref(0);

    watch(() => number , ()=>{
      console.log("CHange");
    })

    return{
      itemId,
      number
    }
  }
})
</script>

<style type="scss">
.item-div{
  background: lightblue;
  min-height: 100px;
}

</style>