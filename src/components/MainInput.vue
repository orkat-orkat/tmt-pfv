<script setup>
import {ref} from 'vue';
const todoRef = ref('');
const todoListRef = ref([]);

const addTodo = () => {
     // IDをミリ秒で、登録する
    const id = new Date().getTime(); 
    // 配列に入力TODOを格納
    todoListRef.value.push({ id: id, task: todoRef.value });
    // ローカルストレージに登録する
    localStorage.todoList = JSON.stringify(todoRef.value);
    // 登録後は入力欄をからにする
    todoRef.value ='';
};
</script>

<template>
    <div class="boxInput">
        <input type="text" class="todo_input" v-model="todoRef" placeholder="memos...">
        <button class="btn" @click="addTodo">add</button>
    </div>

    <div class="box_list" style="border:1px solid blue;">
        <div class="todo_list" v-for="todo in todoListRef" :key="todo.id">
            <div class="todo">
                <input type="checkbox" class="check">
                <label>{{ todo.task }}</label>
            </div>

            <div class="btns">
                <button class="btn green" @click="editTodo" v-if="isEditRef">Edit</button>
                <button class="btn" @click="addTodo" v-else>Add</button>
                <button class="btn pink" @click="delwteTodo(todo.id)">Delete</button>
            </div>
        </div>
    </div>

    
</template>

<style scoped>
.boxInput{
    margin-top: 20px;
}

.todo_input{
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
.box_list{
    margin-top: 20px;
    display:flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: center
}
.todo_list{
    display: flex;
    align-items: center;
    gap:6px;
}

.todo{
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    width:300px ;
}
.check{
    border: 1px solid red;
    transform: scale(1.6);
    margin: 0 16px 2px 8px;
}
.btns{
    display: flex;
    gap: 4px;
}
.green{background-color: green;}
.pink{background-color: pink;}
</style>

