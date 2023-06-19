<template>
  <div class="container">
    <Navbar />
    <ChatWindow/>
    <ChatForm />
  </div>
</template>

<script>
import {  watch } from 'vue';
import Navbar from '../components/Navbar.vue'
import ChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router';
export default {
  components:{
    Navbar,
    ChatForm,
    ChatWindow
  },
 setup(){
  const { user } = getUser();
  const router = useRouter();
  
    watch(user,()=>{
      if(!user.value){
        router.push({name:'Welcome'})
      }
    });

  
   
 }
}
</script>

<style>


</style>