import { projectFirestore } from "@/firebase/confing";
import {ref} from "vue"


const useCollection = (collection) =>{
    const error = ref('');

    const addDoc = async (doc) =>{
        error.value= null;
        
        try {
            await projectFirestore.collection(collection).add(doc)
          }
          catch(err) {
            console.log(err.message)
            error.value = 'could not send the message'
          }
        
    }
    return{ addDoc,error}
}

export default useCollection