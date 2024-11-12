import React from "react";
import FeatureBitsCard from "./Feature/FeatureBitsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from '../assets/imgicon3d/img.png'
import img2 from '../assets/imgicon3d/img-1.png'
import img3 from '../assets/imgicon3d/img-2.png'
import img4 from '../assets/imgicon3d/img-3.png'

export default function KeyFeatures() {
  const keyFeatureBits = [
    {
      title: "Instant Sharing",
      description: " dolor sit amet consectetur adipisicing elit. Laudantium, a veritatis ",
      imgIcon: img1
    },
    {
      title: "Real-time Updates",
      description: " dolor sit amet consectetur adipisicing elit. Laudantium, a veritatis ",
      imgIcon: img2
    },
    {
      title: "Brand Consistency",
      description: " dolor sit amet consectetur adipisicing elit. Laudantium, a veritatis ",
      imgIcon: img3
    },
    {
      title: "Rich Media Integration",
      description: " dolor sit amet consectetur adipisicing elit. Laudantium, a veritatis ",
      imgIcon: img4
    },
  ]
  return (
    <div className="mb-4">
      <div className="feature-bits-section py-2">
      <div className="feature-bits-body custom-container">
        <div class="text-left mb2 content">
          <h4 class="poppins-regular title-2">Explore Our</h4>
          <h3 class="poppins-bold title-2">Key Features</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, a veritatis ipsum vel sed, hic incidunt pariatur consequatur dolor delectus, dicta aspernatur distinctio sint quo quia fuga illum? Mollitia, voluptatum?
          </p>
          <button className="navigate-arrow"><FontAwesomeIcon icon={faArrowLeft} /></button>
          <button className="navigate-arrow"><FontAwesomeIcon icon={faArrowRight} /></button>

        </div>
        <div className="feature-bits-container">
          {
            keyFeatureBits.map((keyFeatureBit) => {
              return <FeatureBitsCard title={keyFeatureBit.title} description={keyFeatureBit.description} link={keyFeatureBit.link} imgIcon={keyFeatureBit.imgIcon} />
            })
          }

        </div>
      </div>
    </div>
    </div>

  );
}
