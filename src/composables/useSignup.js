import { projectAuth } from "@/firebase/confing";
import {ref} from "vue"

const error= ref(null)

const signup = async (email,password,displayName) =>{
    error.value= null;
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email,password);
        if(!res){
            throw new Error ('Could not complete the signup')
        }
        res.user.updateProfile({displayName})
        error.value= null;
    }catch(err){
        console.log(err.message)
        error.value=err.message
    }
}

const useSignup= () =>{
    return {error,signup}
}

export default useSignup