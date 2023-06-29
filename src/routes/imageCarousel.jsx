import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const ImageCarousel=({imageArray})=>{
   
return(
 <Carousel slide={false} fade controls={true} indicators={false} variant={'dark'} > 
{imageArray.map((url,index)=>{
        return(
        <Carousel.Item key={index}>
            <img className="d-block w-100"
            src={url}
            id="carouselitem" 
             style={{objectFit:"contain",maxHeight:"300px", maxWidth:"300px"}}
           
            />
            <Carousel.Caption>
               {index+1}
            </Carousel.Caption>
        </Carousel.Item>
        )
    })}
</Carousel>

)

}
