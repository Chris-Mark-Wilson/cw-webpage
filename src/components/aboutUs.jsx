import { ImageCarousel } from "./imageCarousel";

import {useState,useEffect}from 'react'
import{getUrlList} from '../utils/firebaseApi'
import { getUrl } from "../utils/firebaseApi";

export const AboutUs = () => {
  const [workImageArray,setWorkImageArray]=useState([]);
  const[imageRefs,setImageRefs]=useState([])
 

  useEffect(()=>{
    getUrlList('work_pics')
    .then((refArray)=>{
       setImageRefs(refArray)
    });
    },[])

    useEffect(()=>{
      imageRefs.forEach((ref)=>{
        getUrl(ref)
        .then((url)=>{
          setWorkImageArray(workImageArray=>
            [...workImageArray,url])
        })
      })
    },[imageRefs])
  
  
  
  return (
    <div className="carouselContainer">
      <div className="carouselText">
        <p>30 Years experience.</p>
        <p>All domestic building works undertaken.</p>
        <p>Hmo Conversions.</p>
        <p>Maintenance and repairs</p>
        <p>No job too big or small.</p>
      </div>
      <ImageCarousel imageArray={workImageArray} />
      <div className="carouselText">
        <p>Competitive pricing.</p>
        <p>Contract works.</p>
        <p>NIC/EIC Electrical works.</p>
        <p>Gas Safe Heating / Hot water.</p>
        <p>Call us for a quote today</p>
      </div>
    </div>
  );
};
