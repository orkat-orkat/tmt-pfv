<template>
    <h1 class="title">
     H1dayo
    </h1>

    <ul class="heade-list">
    <li>１番目の要素</li>
    <li>２番目の要素</li>
    <li>３番目の要素</li> 
    <li>4番目の要素</li>   
    <li>Contact</li>   
    </ul>　
</template>

<style scoped>
.title{
   width:100%;
   text-align: left;
   font-size: 32px;
   font-weight: bold;
   margin:2% 10%;
}

ul.heade-list {
    display: flex;
    justify-content: flex-start;
}

ul.heade-list li{
    margin-right: 10px;
}
ul.heade-list li:nth-of-type(1) {
    margin-left: 0;
}
ul.heade-list li:nth-of-type(5) {
    margin-left: auto;
    background-color: #ffc;
}
</style>