import { ImageCarousel } from "./imageCarousel";
import { workImageArray } from "../assets/workImages";

export const AboutUs = () => {
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
        <p>Call us for a quote today!</p>
      </div>
    </div>
  );
};
