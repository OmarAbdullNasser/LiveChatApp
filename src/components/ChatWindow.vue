 <template>
   <div class="chat-Window">
    <div class="error"  v-if="error">{{ error }}</div>
    <div class="messages"  v-if="document" ref="messages">
         <div class="single"  v-for="doc in formattedDocument"  :key="doc.id">
            <span  class="created-at"> {{ doc.createdAt}}</span>
            <span  class="name"> {{ doc.name }}</span>
            <span  class="messages"> {{ doc.message }}</span>
        </div>
    </div>
   </div>
 </template>
 
 <script>
import getCollection from '../composables/getCollection'
import {formatDistanceToNow} from 'date-fns'
import { computed, onUpdated, ref } from 'vue'
 export default {
    setup(){
        const {document, error} = getCollection('messages')

        const formattedDocument = computed(()=>{
            if( document.value){
                return document.value.map(doc=>{
                    let time =formatDistanceToNow(doc.createdAt.toDate());
                    return{ ...doc, createdAt: time}
                });
                
            }
        })


       

         // auto-scroll to bottom of messages
    const messages = ref(null)
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

        return{ document,error, formattedDocument, messages}
    }
 }
 </script>
 
 <style>
 .chat-Window{
    background:#fafafa;
    padding: 30px 20px;
 }
 .single{
    margin: 10px 0;
 }

 .created-at{
    display: block;
    color:#999;
    font-size: 12px;
    margin-bottom: 4px;

 }

 .name{
    font-weight: blod;
    margin-right: 6px;
 }

 .messages{
    max-height: 400px;
    overflow: auto;
 }
 </style>