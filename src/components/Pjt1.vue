<script setup>
import {ref} from 'vue';
</script>

<template>
  
    <div class="contents">
    <h4 class="subtitle1">Pjt1</h4>
  

    </div><!-- contents-->
    
</template>

<style scoped>
.subtitle1
{
    font-size: 2em;
    font-family: 'Noto Sans Japanese';
    color:blue;
    text-align: left;
    font-weight: bold;
    border-bottom: 1px solid #aaa;
    padding-bottom: 14px;
}
.subtitle2{
    font-size: 2em;
    font-family: 'Noto Sans Japanese';
    color:pink;
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid #aaa;
    padding-bottom: 14px;
}

.subtitle3{
    font-size: 2em;
    font-family: 'Shippori Mincho';
    color:palegreen;
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid #aaa;
    padding-bottom: 14px;
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

.self-items5{
    background: #fff;
    border-radius: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    padding: 22px;
    border-right: 1px dashed blue ;
    margin:10px;

}

.cardList_thumb{
    height: 160px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;
    text-align: center;
    width: 100%;
}
.cardList_title{
    text-align: center;
    color: #006e60;
    padding-bottom: 10px;
    width: 100%;
}

p{
    font-size: .9375rem;
    line-height: 1.7;
    text-align: left;
}
</style>

