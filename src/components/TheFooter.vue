<template>
    <h1 class="footer">
     footer da
    </h1>

    <ul class="footer-list">
    <li>１番目の要素</li>
    <li>２番目の要素</li>
    <li>３番目の要素</li> 
    <li class="footer-font">4番目の要素 フォント変えたよ</li>   
    <li class="footer-font2">Contact</li>   
    </ul>　
</template>

<style scoped>
.footer{
    margin-top: 15px;
    height: 30px;
}

ul.footer-list {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding:2% 10%;
}

ul.footer-list li{
    margin-right: 10px;
}

ul.footer-list li:nth-of-type(2) {
    margin-left: auto;
}

ul.footer-list li:nth-of-type(5) {
  border:1px solid green;
  padding:10px;
  border-radius: 100px;
}

.footer-font{
    font-family: 'M PLUS 1p';
    font-weight:100;
    color:red;
}

.footer-font2{
    font-family: 'Shippori Mincho', sans-serif;
    color:rgb(5, 94, 24);
}
</style>