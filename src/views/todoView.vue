<template>
  <HeaderLayout/>

  <section class="todo-section">
    <h1>ToDo List</h1>

    <div class="todo-listings">
      <div v-for="(item,index)  of  lists" class="" :key="index">
        <p >{{item.title}}</p>
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
      <a-textarea v-model:value="todoDesc" placeholder="Desc" :row="4"/>


      <a-button @click="addItem">Add</a-button>
    </div>


  </section>
</template>

<script>
/* eslint-disable */
import {Slide} from "vue3-burger-menu";
import {ref, defineComponent} from "vue";
import {useRouter} from "vue-router";
import {ZhihuCircleFilled} from "@ant-design/icons-vue";
import HeaderLayout from "@/components/headerLayout";
import localStorage from "localStorage";


export default defineComponent({
  name: "todoView.vue",
  components: {
    HeaderLayout
  },
  setup() {
    const keyItem = 'todoList';
    const localStorage = require('localStorage');

    const todoTitle = ref('');
    const todoDesc = ref('');

    // const rand= Math.random(0,1111111);

    const getLists = localStorage.getItem(keyItem);
    let lists = [];
    console.log(getLists);
    if(!getLists || getLists == null){
      lists = [];
    }else{
      lists = JSON.parse(getLists);
    }



    const addItem = () => {
      console.log(lists);

      const item= {
        "title" : todoTitle.value,
        "desc": todoDesc.value
      }
      lists.push(item);
      localStorage.setItem(keyItem, JSON.stringify(lists));

      alert("item Added");
    }




    return {
      todoTitle,
      todoDesc,
      addItem,
      lists
    };
  }
});
</script>

<style lang="scss">

.add-todo-list {
  width: 50%;
  margin: 0 auto;
}

</style>