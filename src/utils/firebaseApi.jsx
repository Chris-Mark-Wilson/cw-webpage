import {ref, getDownloadURL ,listAll} from 'firebase/storage';
import {storage} from '../firebaseConfig'

export const getUrl =(ref) =>{

    return (getPictureDownloadURL(ref))
}

const getPictureDownloadURL= async(ref)=>{
    try{
    
    const url=await getDownloadURL(ref);
   
   return(url)
    }
    catch(error){
        console.log(error)
    }
    }

    //refs.items is an array of references
    export const getUrlList=async(folder)=>{
        try{
        const listRef=ref(storage,`${folder}`)
               
   const refs=await listAll(listRef)
       
          
       return     (refs.items) //array
      
    }
    catch(error){
        console.log(error)
    }
    }
// gs://cw-webpage-1686390194073.appspot.com/
// firebase bucket root address