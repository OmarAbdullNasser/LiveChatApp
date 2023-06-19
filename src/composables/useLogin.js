import { projectAuth } from "@/firebase/confing";
import {ref} from "vue"

const error= ref(null)

const login = async (email,password) =>{
    error.value= null;
    try{
        const res = await projectAuth.signInWithEmailAndPassword(email,password);
        if(!res){
            throw new Error ('Could not Login')
        }
        console.log(res)
        error.value= null;
    }catch(err){
        //err for developer to know where is errro
        //errror is for user 
        console.log(err.message)
        error.value=err.message
    }
}

const useLogin= () =>{
    return {error,login}
}

export default useLogin