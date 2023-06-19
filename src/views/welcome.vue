<template>
  <div class="welcome container">
    <div v-if="ShowLogin">
      <h2>Loging</h2>
      <Login @login="enterChat" />
      <p>Not have account?
      <span @click="ShowLogin=false">Signup</span>
    </p>
    </div>
    <div v-else>
      <h2>Signup</h2>
      <Signup @sigin ="enterChat"/>
      <p>Already have account?
      <span @click="ShowLogin=true">Login</span>
      </p>
    </div>
    
    
  </div>
</template>

<script>
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components:{
    Signup,
    Login
  },
  setup(){
    let ShowLogin =  ref (true);
    let router = useRouter(); 

    const enterChat = () =>{
      router.push({name:'Chatroom'})
    }


    return{ShowLogin,enterChat}
  }
}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
    .welcome form{
      width:300px;
      margin: 20px auto;
    }
    .welcome label{
      display: block;
      margin: 20px 0 10px;
    }
    .welcome input{
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      border:1px solid #eee;
      outline:none;
      color:#999;
      margin:10px auto;
    }
    .welcome span{
      cursor: pointer;
      font-weight: bold;
      text-decoration: underline;
    }
    .welcome button{
      margin: 20px auto;
    }
</style>