<script setup>
import {ref} from 'vue';
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

