import { ImageCarousel } from "../components/imageCarousel";

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
    <>
    <div className="carouselContainer" >
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
        <br/>
        <button style={{backgroundColor:"grey",float:'left'}}>
        <a href= {'../'} className="button_link">Back to title page</a>
        </button>
      </div>
    </div>
        <hr/>
        <div className="textContainer">
          <p>This was me, up to the end of 2022.
          <br/>
          I've spent 30 plus years in the building game.
          <br/>
         Now, it's time for a new chapter. Something I've always been interested in. Since 1982 at least. <br/>
         Computer programming. Or that's what it used to be called...
         <br/>
      These days it's more specialised, clearly, and what I've come to realise is that the passion I have for creativity, coupled with an insatiable lust for knowledge and personal development, leads me back to 'computer programming' even at this late stage of my career focused years. 
      <br/><br/>
      So, this is me as of 2023. Full Stack Web Developer. Or Junior developer, depends on your point of view...<br/>
      Following an intensive 13 week bootcamp with Northcoders, I'm now at a stage where I can write a basic webpage, from scratch. Never used wordpress or any other CMS come to that (not since Myspace anyway), so everything you see here is written in vsCode, using React.js as the framework. Built using the Vite build tool. Its my first ever attempt at making a 'website'.
      <br/><br/>
      So, feel free to offer me a job. Me, Chris Wilson. 30 odd years as a builder, throw in some welding/fabrication experience and an apprenticeship with BAe and you have a mature individual, who can write front and back end applications, backed up with a lifetime of experience working with everyone from a fresh labourer to an accomplished architect.
      <br/>
      Just bear in mind, I'm now that same fresh labourer again, I suppose I can 'barely swing a hammer' compared to a senior developer, but if the way things have gone in the building game turn out to be true for the IT game, once I get going, there is no stopping a grafter. Bring on the next 20 years...
          <br/>
          </p>
        </div>
        <br/>
        <button style={{backgroundColor:"grey"}}>
        <a href= {'../'} className="button_link">Back to title page</a>
        </button>
    </>
  );
};
