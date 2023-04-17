<script setup>
import {ref} from 'vue';
const todoRef = ref('');

const todoListRef = ref([]);
const ls = localStorage.todoList;
todoListRef.value = ls ? JSON.parse(ls) : [];


const isEditRef = ref(false); //編集ボタンを押した時にtrueにする
let editId = -1;



const showTodo = (id) => {
    const todo = todoListRef.value.find((todo) => todo.id === id);
    todoRef.value = todo.task; 
    isEditRef.value = true;
    editId = id;
};

const addTodo = () => {
     // IDをミリ秒で、登録する
    const id = new Date().getTime(); 
    // 配列に入力TODOを格納
    todoListRef.value.push({ id: id, task: todoRef.value });
    // ローカルストレージに登録する
    localStorage.todoList = JSON.stringify(todoListRef.value); //todoRefだった
    // 登録後は入力欄を空にする
    todoRef.value = '';
};

//変更ボタンを押した時
const editTodo = () => {
    //編集対象となるTODOを取得
    const todo = todoListRef.value.find((todo) => todo.id === editId);
    //TODOリストから編集対象のインデックスを取得
    const idx = todoListRef.value.findIndex((todo) => todo.id === editId);
    //taskを編集後のTODOで書き換え
    todo.task = todoRef.value;
    //splice関数でインデックスを元に対象オブジェクトを書き換え
    todoListRef.value.splice(idx, 1, todo);

    localStorage.todoList = JSON.stringify(todoListRef.value);
    isEditRef.value = false; //編集モードを解除
    editIndex= -1;// IDを初期値に戻す //editIndexから直した
    todoRef.value = '';

};

//clear sakujo 

const deleteTodo = (id) => {
    const todo = todoListRef.value.find((todo) => todo.id === id);
    const idx = todoListRef.value.findIndex((todo) => todo.id === id);

    const delMsg ='[' + todo.task + ']を削除しますか？';
    if (!confirm(delMsg)) return;

    todoListRef.value.splice(idx, 1);
    localStorage.todoList = JSON.stringify(todoListRef.value);
};

</script>

<template>
  

    <div class="self-wrap">
        <div class="self-items">1</div>
        <div class="self-items">2</div>
        <div class="self-items">3</div>
    </div>
    <div class="self-wrap">
        <div class="self-items">1</div>
        <div class="self-items">2</div>
        <div class="self-items">3</div>
        <div class="self-items">4</div>
        <div class="self-items">5</div>
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
    gap:8px;
}

.todo{
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 12px;
    width:300px ;
}
.check{
    border: 1px solid red;
    transform: scale(1.6);
    margin: 0 16px 2px 6px;
}
.btns{
    display: flex;
    gap: 4px;
}
.green{background-color: green;}
.green2{background-color: greenyellow; border:1px solid green;}

.pink{background-color: #ff4081;}


.self-wrap{
    display: flex;
    padding:2% 10%;
}
.self-items{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin:0  8px;
    width: 400px;
    background-color: #03a9f4;
    border-radius: 24px;
    color: #ccc;
}
</style>

