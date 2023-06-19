import { projectAuth } from "@/firebase/confing";
import {ref} from "vue"

const error= ref(null)

const logout = async () =>{
    error.value= null;
    try{
        await projectAuth.signOut();
    }catch(err){
        //err for developer to know where is errro
        //errror is for user 
        console.log(err.message)
        error.value=err.message
    }
}

const useLogout= () =>{
    return {error,logout}
}

export default useLogout