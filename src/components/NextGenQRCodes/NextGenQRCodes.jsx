import React from 'react'
import FeatureLongDescribe from '../Feature/FeatureLongDescribe'
import { faCableCar, faLocation, faRadiation } from '@fortawesome/free-solid-svg-icons'
import cardImg from "../../assets/cardimage.png";
import './next-gen-qr.css'
export default function NextGenQRCodes() {

    const nextGenQRCodeDetails = [
        {
            title: "Pick a Shape",
            description: "perspiciatis eum blanditiis dolorem vero corrupti voluptates.",
            imgIcon: faCableCar
        },

        {
            title: "Select your brand colors",
            description: "perspiciatis eum blanditiis dolorem vero corrupti voluptates.",
            imgIcon: faRadiation
        },

        {
            title: "Add Company logo",
            description: "perspiciatis eum blanditiis dolorem vero corrupti voluptates.",
            imgIcon: faLocation
        },


    ]
    return (
        <div className='custom-container mb-4'>
            <div class="feature-details">
                <div className="feature-image-container">
                    <div className="feature-image  bg-yellowpink">
                        <img className="cardQR" src={cardImg} alt="Illustration of Digital Business Card" />
                    </div>
                </div>
                <div className='content'>
                    <h3 className='poppins-regular title-2' >Next Generation</h3>
                    <h3 className='poppins-bold title-2 highlighted'>QR Codes</h3>

                    <div className='description poppins-regular'>

                        <div>
                            <p className='poppins-regular'>
                                We were not impressed by the standard QR so thats why we added some, color, personality and logo to the mix. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quis quibusdam at mollitia quidem minima vero itaque praesentium iusto atque! Laborum quaerat odit nostrum animi nemo pariatur doloremque dolor omnis.
                            </p>
                            <FeatureLongDescribe details={nextGenQRCodeDetails} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
