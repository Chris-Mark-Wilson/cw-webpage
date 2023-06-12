import { ImageCarousel } from "./imageCarousel";

import {useState,useEffect}from 'react'
import{getUrlList} from '../utils/firebaseApi'
import { getUrl } from "../utils/firebaseApi";

export const AboutUs = () => {
  const workImageArray=[];
 
    getUrlList('work_pics')
    .then((refArray)=>{
        refArray.forEach((ref)=>{
        getUrl(ref)
            .then((url)=>{
               
               workImageArray.push(url)
             })
          })
      })
    
  
  
  console.log(workImageArray)
  
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
