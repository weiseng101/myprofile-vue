<template>
  <div class="home-div">
    <div class="pagination-wrapper">
      <a-pagination v-model:current="current" @change="changePage" :total="50" show-less-items/>
    </div>

    <Transition>
      <div v-if="itemloading" class="example">
        <a-spin/>
      </div>
    </Transition>

    <a-divider/>

    <a-badge :count="1">
      <a-avatar shape="square">
        <template #icon>
          <UserOutlined/>
        </template>
      </a-avatar>
    </a-badge>

    <!--    <upload-outlined></upload-outlined>-->

    <!--    <a-upload-->
    <!--        v-model:file-list="fileList"-->
    <!--        name="avatar"-->
    <!--        list-type="picture-card"-->
    <!--        class="avatar-uploader"-->
    <!--        :show-upload-list="false"-->
    <!--        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"-->
    <!--        :before-upload="beforeUpload"-->
    <!--        @change="handleChange"-->
    <!--    >-->
    <!--      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />-->
    <!--      <div v-else>-->
    <!--        <loading-outlined v-if="loading"></loading-outlined>-->
    <!--        <plus-outlined v-else></plus-outlined>-->
    <!--        <div class="ant-upload-text">Upload</div>-->
    <!--      </div>-->
    <!--    </a-upload>-->

    <a-divider/>

    <a-steps :current="0">
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template #title>Finished</template>
        <template #description>
          <span>How aRe U Doing??</span>
        </template>
      </a-step>
      <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description."/>
      <a-step title="Waiting" description="This is a description."/>
    </a-steps>

    <a-button @click="goToPage">{{ $t('getNow') }}</a-button>

    <br/>
    <a-divider/>

    <a-button type="primary" @click="goPAge2">PAge Go 3</a-button>
    <a-button @click="logDeviceInfo">Log Device Info</a-button>

    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>

    <div class="test-item-div">

    </div>
  </div>

</template>

<script>
/* eslint-disable */
import {DeleteFilled, LeftCircleTwoTone, LoadingOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons-vue";
import {defineComponent, ref, onMounted} from 'vue';

import {Device} from '@capacitor/device';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default defineComponent({
  name: 'HelloWorld',
  components: {
    DeleteFilled,
    LeftCircleTwoTone,
    LoadingOutlined,
    UploadOutlined
  },
  beforeMount() {
    console.log("On MOunt");
  },
  mounted() {
    console.log("MOUNTed");
  },
  methods: {
    changePage(page) {
      this.current = page;
    },
    goToPage() {
      this.$router.push({
        path: 'date/value111'
      })
    },
    goPAge2() {
      this.$router.push({
        name: 'date',
        query: {id: '323232'}
      })
    }
  },
  data() {
    const current = ref(2);

    return {
      current
    };
  },
  setup() {

    const itemloading = ref(true);

    const logDeviceInfo = async () => {
      const info = await Device.getInfo();

      console.log("Device Info");
      console.log(info);
    };

    const logBatteryInfo = async () => {
      const info = await Device.getBatteryInfo();

      console.log(info);
    };

    const handleChange = info => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, base64Url => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }

      if (info.file.status === 'error') {
        loading.value = false;
        message.error('upload error');
      }
    };

    const beforeUpload = file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }

      return isJpgOrPng && isLt2M;
    };

    onMounted(() => {
      console.log("on MOunted");

      setTimeout(() => {
        itemloading.value = false;
      }, 2500)
    });

    const fileList = ref([]);
    const loading = ref(false);
    const imageUrl = ref('');

    return {
      logDeviceInfo,
      logBatteryInfo,
      fileList,
      headers: {
        authorization: 'authorization-text',
      },
      handleChange,
      loading,
      imageUrl,
      beforeUpload,
      itemloading
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  background: lightblue;
}

.col-div {
  background: lightblue;
}

.height-200 {
  height: 200px;
}

.full-div {
  width: 100%;
}

.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.home-div {
  background: lightgoldenrodyellow;
  height: 2000px;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.test-item-div{
  accent-color: hotpink;
  height: calc(50vh);
  width:50vw;
  border: 2px solid orange;
}

</style>
