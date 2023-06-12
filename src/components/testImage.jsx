import {getUrl} from '../utils/firebaseApi'
import {useEffect,useState} from 'react'

export const TestImage=()=>{

    const [url,setUrl]=useState("")

    useEffect(()=>{
        getUrl()
        .then((result)=>{
            setUrl(result)
        })
    },[url])
    getUrl();
   
    return (
        <div>
            <img src={url}/>
        </div>
    )


}