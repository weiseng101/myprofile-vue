<template>
  <h2>PRoduct</h2>
  <h4>{{ productName }}</h4>
</template>

<script>
export default {
  name: "productView.vue",
  data() {
    return {
      productName: ''
    }
  },
  props: [],
  mounted:{


  }

}
</script>

<style scoped>

</style>