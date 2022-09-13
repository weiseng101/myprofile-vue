<template>
  <HeaderLayout/>

  <section class="todo-section">
    <h1>ToDo List:</h1>

    <div class="todo-listings">
      <div v-for="(item,index)  of  lists" class="" :key="index">
        <p><span>{{ item.title }}</span>
          <a-button class="remove-btn" @click="removeItem(index)">X Remove</a-button>
        </p>
      </div>
    </div>

    <div class="add-todo-list">
      <h2>Add ToDo Item:</h2>

      <a-input v-model:value="todoTitle" placeholder="Title">
        <template #prefix>
          <user-outlined type="user"/>
        </template>
        <template #suffix>
          <a-tooltip title="Extra information">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)"/>
          </a-tooltip>
        </template>
      </a-input>
      <br/>
      <br/>
      <!--      <a-textarea v-model:value="todoDesc" placeholder="Desc" :row="4"/>-->
      <SlidersOutlined style="font-size:30px;" />

      <a-button @click="addItem">Add</a-button>
    </div>


  </section>
</template>

<script>
/* eslint-disable */
import {Slide} from "vue3-burger-menu";
import {ref, defineComponent} from "vue";
import {useRouter} from "vue-router";
import {SlidersOutlined} from "@ant-design/icons-vue";
import HeaderLayout from "@/components/headerLayout";
import localStorage from "localStorage";
import { useToast } from "vue-toastification";




export default defineComponent({
  name: "todoView.vue",
  components: {
    HeaderLayout,
    SlidersOutlined
  },
  setup() {
    const keyItem = 'todoList';
    const localStorage = require('localStorage');

    const todoTitle = ref('');
    const todoDesc = ref('');

    const toast = useToast();


    // const rand= Math.random(0,1111111);

    const getLists = localStorage.getItem(keyItem);
    const lists = ref([]);
    console.log(getLists);
    if (!getLists || getLists == null) {
      lists.value = [];
    } else {
      lists.value = JSON.parse(getLists);
    }

    const removeItem = (ind) => {
      lists.value.splice(ind, 1);

      localStorage.setItem(keyItem, JSON.stringify(lists.value));

      toast.success("Item Removed!", { timeout: 2000});

    }

    const addItem = () => {
      console.log(lists);

      const item = {
        "title": todoTitle.value,
        "desc": todoDesc.value
      }
      lists.value.push(item);
      localStorage.setItem(keyItem, JSON.stringify(lists.value));


      // or with options
      toast.success("Item Added!", { timeout: 2000});


      todoDesc.value = '';
      todoTitle.value = '';

    }


    return {
      todoTitle,
      todoDesc,
      addItem,
      lists,
      removeItem,
      toast
    };
  }
});
</script>

<style lang="scss">

.add-todo-list {
  width: 50%;
  margin: 0 auto;
}

.todo-section {
  background: rgba(121, 244, 122, 0.4);
  display: block;
  height: calc(100vh - 60px);
  width: calc(100vw);
}

.todo-listings {
  width: 50%;
  margin: 0 auto;

  p {
    font-size: 18px;
    text-align: left;

    display: flex;
    justify-content: flex-start;

  }

  .remove-btn {
    margin-left: 10px;
  }
}

</style>