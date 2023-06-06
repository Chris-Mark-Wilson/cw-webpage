import { lockdownImageUrls } from "../assets/lockdownImages";
import { MyCarousel } from "./myCarousel";

export const Lockdown = () => {
  // const [bikeImageArray, setBikeImageArray] = useState([]);

  return (
    <div className="carouselContainer">
      <div className="carouselText">
        <p>Lockdown projects to keep busy...</p>

        <p>Summer House and electric bikes </p>
      </div>
      <MyCarousel imageArray={lockdownImageUrls} />
      <div className="carouselText">
        <p>Its amazing what you can find to keep yourself amused...</p>

        <p></p>
      </div>
    </div>
  );
};
