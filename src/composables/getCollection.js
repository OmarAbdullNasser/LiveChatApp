import { projectFirestore } from "@/firebase/confing";
import {ref, watchEffect} from "vue"

const getCollection = (collection)=>{
    const document = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    const unnsub = collectionRef.onSnapshot((snap)=>{
        let results =[];
        snap.docs.forEach(doc=>{
            doc.data().createdAt && results.push({...doc.data(), id:doc.id}) 
        })

        document.value = results
        error.value=null
    },(err)=>{  
        console.log(err.message)
        document.value= null
        error.value = 'Could not fetch data'
    })  
    
    watchEffect((onInvalidate)=>{
        onInvalidate(()=>{
            unnsub();
        })
    })

    return {document, error}
}

export default  getCollection