import { bikeImageUrls } from "../assets/images";
import { MyCarousel } from "./myCarousel";



export const Bikes=()=>{
   // const [bikeImageArray, setBikeImageArray] = useState([]);

    return(
        <div className="carouselContainer">
        <div className="carouselText">
            <p>During the lockdown I decided I was going to build my girlfriend a 'recumbent trike'. Well, it started off as a trike, and ended up as a bunch of electric bikes.</p>
           
            <p>I started off with a design I found on the internet but quickly modified it as It wasnt exactly what I was looking for.</p>
        </div>
        <MyCarousel imageArray={bikeImageUrls} />
        <div className="carouselText">
            <p>I learnt about 'camber', 'castor' and 'ackerman steering'. A shorter wheelbase gave a tighter turning circle. The thing actually went in a straight line!</p>
           
            <p>But then I discovered Louisa would be happier on a standard 2 wheeler so the trike kind of got shelved in favour of an electric standard bicycle. </p>
        </div>
      </div>
    )
}


  

