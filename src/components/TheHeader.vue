<template>
    <h1 class="title">
     test
    </h1>
    <ul class="header-list">
        <li>Logo=left</li>
        <li><a href="">List1</a></li>
        <li><a href="">List1</a></li>
        <li><a href="">List1</a></li>
        <li><a href="">Contact</a></li>
     </ul>
</template>

<style scoped>
.title{
   width:100%;
   text-align: left;
   font-size: 32px;
   font-weight: bold;
   padding: 2% 10%;
}


.header-list{
    width:100%;
    display: flex;
    justify-content: flex-start;
    padding:0 10%;
}

.header-list li{
    margin-right: 1%;
}

.header-list li:last-of-type {
    margin-left: auto;
    margin-right:0;
}
</style>