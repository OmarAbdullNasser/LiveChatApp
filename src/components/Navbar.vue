<template>
  <nav v-if="user" >
    <div>
        <p>Here there....{{user.displayName}}</p>
        <P class="email"> Currently logged in as ... {{user.email}}</P>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'


export default {
  setup(){
    const { error,logout}= useLogout(); 
    const { user } = getUser()

    const handleLogout = async () =>{
      await logout();
      if( !error.value){
          console.log('User has be Logout')
        }
    } 

    return{ handleLogout,user}
  }
}
</script>

<style>
nav{
    padding: 20px;
    display: flex;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    align-items: center;
}
nav p{
    margin: 2px auto ;
    font-size: 16px;
    color:#444;
}
nav p.email{
    font-size: 14px;
    color:#9999
}
</style>