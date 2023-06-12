import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import {storage} from '../firebase'

export const getUrl =() =>{

    return (getPictureDownloadURL())
}

const getPictureDownloadURL= async()=>{
    try{
    const pictureRef = ref(storage,'sh1.jpg');
    const url=await getDownloadURL(pictureRef);
   
   return(url)
    }
    catch(error){
        console.log(error)
    }
    }


// gs://cw-webpage-1686390194073.appspot.com/
// firebase bucket root address