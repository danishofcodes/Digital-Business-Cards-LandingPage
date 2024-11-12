import React from 'react'
import FeatureLongDescribe from '../Feature/FeatureLongDescribe'
import { faCableCar, faLocation, faRadiation } from '@fortawesome/free-solid-svg-icons'
import card2Img from "../../assets/cards2.png";

export default function IntegrateHRTools() {

    const IntegrateHRToolsDetails = [
        {
            title:"Onboarding",
            description:"perspiciatis eum blanditiis dolorem vero corrupti voluptates." ,
            imgIcon : faCableCar
        },

        {
            title:"Select your brand colors",
            description:"perspiciatis eum blanditiis dolorem vero corrupti voluptates." ,
            imgIcon : faRadiation
        },

        {
            title:"Offboarding",
            description:"perspiciatis eum blanditiis dolorem vero corrupti voluptates." ,
            imgIcon : faLocation
        },


    ]
  return (
    <div className='bg-gray py-2 mb-4'>
    <div class="feature-details custom-container ">
    <div className="feature-image-container">
                    <div className="feature-image b-lg bg-yellowpink">
                        <img className='card2pic' src={card2Img} alt="Illustration of Digital Business Card" />
                    </div>
                </div>
    <div className='content'>
        <h3 className='poppins-regular title-2' >Integrate HR Tools</h3>
        <h3 className='poppins-bold title-2 highlighted'>Save Time</h3>

        <div className='description poppins-regular'>

            <div>
                <p className='poppins-regular'>
                    We were not impressed by the standard QR so thats why we added some, color, personality and logo to the mix. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quis quibusdam at mollitia quidem minima vero itaque praesentium iusto atque! Laborum quaerat odit nostrum animi nemo pariatur doloremque dolor omnis.
                </p>
                  <FeatureLongDescribe  details={IntegrateHRToolsDetails} />
            </div>
        </div>
    </div>
</div>
</div>
  )
}
