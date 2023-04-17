

<template>
    <h1 class="title">
     H1dayo
    </h1>

    <ul class="heade-list">
    <li>１番目の要素</li>
    <li><button @click="About">About</button></li>
    <li><button @click="Home">Home</button></li>
    <li><a href="">３Link</a></li> 
    <li><button @click="Pjt1">Pjt1</button></li>   
    <li>Contact</li>   
    </ul>　
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()

    const Home = () => {
      router.push('/Home')
    }

    return {
      Home
    }
  }
}
</script>




<style scoped>
.title{
   width:100%;
   text-align: left;
   font-size: 32px;
   font-weight: bold;
   padding:2% 10%;
}

ul.heade-list {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding:2% 10%;
}

ul.heade-list li{
    margin-right: 10px;
}

ul.heade-list li:nth-of-type(4) {
    margin-left: auto;
    background-color: #ffc;
}
</style>