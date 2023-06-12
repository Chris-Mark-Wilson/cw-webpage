import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const ImageCarousel=({imageArray})=>{
    console.log(imageArray)
return(
 <Carousel  slide={false}  controls={true} indicators={false} > 
{imageArray.map((url,index)=>{
        return(
        <Carousel.Item key={index}>
            <img className="d-block w-100"
            src={url}
            
            style={{objectFit:"cover",maxHeight:"300px", maxWidth:"300px"}}
            />
        //     <Carousel.Caption>
        //        {index}
        //     </Carousel.Caption>
        // </Carousel.Item>
        )
    })}
</Carousel>

)

}
