<script setup>

import {ref} from 'vue';
const todoRef = ref('');
const todoListRef = ref([]);


//arrow 関数
const addTodo = () => {
    // IDをカニ的にミリ秒で、登録する
    const id = new Date().getTime(); 
    // 配列に入力TODOを格納
    todoListRef.value.push({ id: id, task: todoRef.value});
    // ローカルストレージに登録する
   localStorage.todoList =JSON.stringify(todoRef.value);

    // 登録後は入力欄を空にする
    todoRef.value = '';
};
</script>

<template>
    <div class="boxInput">
        <input type="text" class="input" placeholder="memos..." v-model="todoRef">
        <button class="btn" @click="addTodo">add</button>
    </div>

    {{ todoRef }}
</template>

<style scoped>
.boxInput{
    margin-top: 20px;
}

.input{
   width: 300px;
   margin-right: 8px;
   padding: 8px;
   font-size: 18px;
   border: 1px solid #aaa;
   border-radius: 6px;
}

.btn{
    padding: 8px;
    background-color: #03a9f4;
    border-radius:6px;
    color: #fff;
    text-align: center;
    font-size:14px;
}
</style>

