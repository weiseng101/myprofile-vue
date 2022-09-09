<template>
  <HeaderLayout/>

  <div class="date-section">
    <itemComponent :msg="msg"/>


    <h1>{{ title }}</h1>
    <h2>{{ this.items }}</h2>
    <h2>{{ thedate }}</h2>
    <h4> {{ computedDate }}</h4>
    <h5> {{ getId }}</h5>
    <div>

      <a-button type="primary" @click="testMethod">Test MEthod</a-button>

      <a-button type="danger" @click="changeItemId">Change 123123 ID</a-button>

      <router-link
          to="test"
          class="flex-box flex-align-center account-menu-item"
      >
        TO LINK.
      </router-link>


    </div>

    <a-date-picker v-model:value="pickerDate" type="date" valueFormat="YYYY-MM-DD" format="YYYY-MM-DD"
                   @change="onChange"/>

    <button @click="goToPage">Go To PAge</button>
    <a-button type="warning" @click="showPromoDetails('333')">Go Refresh</a-button>

    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Activity name">
        <a-input v-model:value="formState.name"/>
      </a-form-item>
      <a-form-item label="Instant delivery">
        <a-switch v-model:checked="formState.delivery"/>
      </a-form-item>
      <a-form-item label="Activity type">
        <a-checkbox-group v-model:value="formState.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="Resources">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">Sponsor</a-radio>
          <a-radio value="2">Venue</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="Activity form">
        <a-input v-model:value="formState.desc" type="textarea"/>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px">Cancel</a-button>
      </a-form-item>
    </a-form>

  </div>
</template>

<script>
/* eslint-disable */
import dayjs from "dayjs"
// import {DatePicker} from 'ant-design-vue';
import itemComponent from "../components/itemComponent"
import {useRoute, useRouter} from "vue-router"
import {defineComponent, reactive, ref, onMounted, onBeforeMount, watch} from 'vue';
import HeaderLayout from "@/components/headerLayout";


export default defineComponent({
  name: "dayView.vue",
  props: ['items', 'itemname', 'thedate'],
  components: {
    itemComponent,
    HeaderLayout
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    console.log(route);

    const formState = reactive({
      username: '',
      password: '',
      name: '',
      delivery: false,
      resource: '',
      remember: true,
      desc: '',
      type: []
    })

    const labelCol = ref({style: {width: '250px'}})
    const wrapperCol = ref({span: 14});

    const date = ref('2022-09-15')
    const title = ref('Hello1232143');

    const msg = ref('iteite')

    const pickerDate = ref('');

    const getId = ref('HEHE')

    const ItemID = ref('');


    const showPromoDetails = (promo) => {
      router.push({name: 'date', query: {id: promo, date: date.value}})

    }
    const onChange = () => {
      console.log("on changed");
      console.log(pickerDate.value);
      console.log(dayjs(pickerDate.value).format("YYYY/MM/DD").toString())
    }

    const goToPage = () => {
      router.push({path: '/test'});
    }

    const changeItemId = () => {
      msg.value += '1'
    };

    watch(() => route.query, () => {
      console.log("Watch")
      if (route.query === null) {
        getId.value = ''
      } else {
        getId.value = route.query.id
      }
      // Optionally you can set immediate: true config for the watcher to run on init
      // }, { immediate: true });
    });
    onMounted(() => {
      console.log("on MOunted");

      console.log(route);
      console.log(route.query);

    });
    onBeforeMount(() => {
      // alert("LEaving!");
    })

    return {
      date,
      title,
      setDate: '2019/04/05',
      getDate: '',
      item: 0,
      pickerDate,
      formState,
      labelCol,
      wrapperCol,
      onChange,
      getId,
      goToPage,
      showPromoDetails,
      msg,
      changeItemId
    }
  },
  computed: {
    calculatedItem() {
      return this.item + 3;
    },
    computedDate() {
      return dayjs(this.setDate).add(10, 'minute').format("YYYY-MM-DD HH:mm:ss")
    }
  },
  methods: {
    testMethod() {
      console.log(this.pickerDate)
    },
    onSubmit() {
      console.log("On Submit")
      console.log(this.formState);
      console.log(this.$router);
      // console.log(this.$refs);
      this.$router.push('test')
    }
  }
})
</script>

<style  lang="scss" scoped>


.date-section{
  background: rgba(190, 177, 127, 0.4);
  display: block;
  height: calc(100vh - 60px);
  width: calc(100vw);
}


</style>