import { projectAuth } from "@/firebase/confing";
import {ref} from "vue"

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(_user => {
    console.log('User state Changed . Current state is : ', _user)
    user.value= _user
});

const getUser = () =>{
    return {user}
};

export default getUser