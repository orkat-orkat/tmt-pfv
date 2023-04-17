<script setup>
import {ref} from 'vue';
</script>

<template>
  
    <div class="contents">
    <h4 class="subtitle1">test</h4>
    <div class="self-wrap">
        <div class="self-items">1</div>
        <div class="self-items">2</div>
        <div class="self-items">3</div>
    </div>
    <h4 class="subtitle2">test</h4>
    <div class="self-wrap">
        <div class="self-items">1</div>
        <div class="self-items">2</div>
        <div class="self-items">3</div>
        <div class="self-items">4</div>
        <div class="self-items">5</div>
    </div>

    <h4 class="subtitle1">test3</h4>
    <div class="self-wrap">
        <div class="self-items2">1</div>
        <div class="self-items3">2</div>
    </div>
    
    <h4 class="subtitle1">test4</h4>
    <div class="self-wrap">
        <div class="self-items2">4</div>
        <div class="self-items3">5</div>
    </div>

    </div><!-- contents-->
    
</template>

<style scoped>
.subtitle1, .subtitle2{
    font-size: 2em;
    color:blue;
    text-align: left;
    margin:16px;
    font-weight: bold;
    border-bottom: 1px solid #aaa;
}
.self-wrap{
    display: flex;
    padding:50px 0;
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

.self-items2{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin:0  8px;
    width: 800px;
    background-color: #03a9f4;
    border-radius: 24px;
    color: #ccc;
}

.self-items3{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin:0  8px;
    width: 400px;
    background-color: #03a9f4;
    border-radius: 24px;
    color: #ccc;
}
</style>

