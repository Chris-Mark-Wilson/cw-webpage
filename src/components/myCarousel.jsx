import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const MyCarousel=({imageArray})=>{
return(
<Carousel  slide={false}  controls={true} indicators={false} >
    {imageArray.map(({url,label},index)=>{
        return(
        <Carousel.Item key={index}>
            <img className="d-block w-100"
            src={url}
            alt={label}
            style={{objectFit:"cover",maxHeight:"300px", maxWidth:"300px"}}
            />
            <Carousel.Caption>
                <h5>{label}</h5>
            </Carousel.Caption>
        </Carousel.Item>
        )
    })}
</Carousel>

)

}
