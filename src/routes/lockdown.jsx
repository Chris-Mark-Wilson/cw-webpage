import { ImageCarousel } from "./imageCarousel";

import { useState, useEffect } from "react";
import { getUrlList } from "../utils/firebaseApi";
import { getUrl } from "../utils/firebaseApi";

export const Lockdown = () => {
  const [shedImageArray, setShedImageArray] = useState([]);
  const [imageRefs, setImageRefs] = useState([]);

  useEffect(() => {
    getUrlList("summer_house").then((refArray) => {
      setImageRefs(refArray);
    });
  }, []);

  useEffect(() => {
    imageRefs.forEach((ref) => {
      getUrl(ref).then((url) => {
        setShedImageArray((shedImageArray) => [...shedImageArray, url]);
      });
    });
  }, [imageRefs]);

  return (
    <div className="carouselContainer">
      <div className="carouselText">
        <p>Lockdown project to keep busy</p>
      </div>
      <ImageCarousel imageArray={shedImageArray} />
      <div className="carouselText">
        <p>Its amazing what you can find to keep yourself amused...</p>

        <a href= {'../'} className="button_link">Back to title page</a>
      </div>
    </div>
  );
};
