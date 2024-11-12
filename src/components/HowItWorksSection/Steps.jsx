import React from 'react'
import Button from '../button/Button'
import StepsCard from './StepsCard/StepsCard'
import "./how-it-works.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPaintBrush, faShippingFast, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
FontAwesomeIcon

export default function Steps() {
    function handleClick() {
        console.log("works")
    }

    const steps = [
        {
            stepNo: "Step 01",
            title: "Order",
            description: "Select a card and add-ons Complete the order process and payment.",
            imgIcon: faCheckCircle
        },

        {
            stepNo: "Step 02",
            title: "Design",
            description: "Provide design input and upload your logo through the design portal",
            imgIcon: faPaintBrush
        },

        {
            stepNo: "Step 03",
            title: "Review",
            description: "Review the digital design proof and provide feedback.",
            imgIcon: faCheckCircle
        },

        {
            stepNo: "Step 04",
            title: "Print & Ship",
            description: "After approval we will program, produce and ship your card.",
            imgIcon: faShippingFast
        }
    ]


    return (
        <div className='mb-4'>
            <div class="how-it-works-container">

                <div class="how-it-works-header custom-container">
                    <div className='text-left mb2'>
                        <h4 class="poppins-regular title-2">Understanding the Mechanics</h4>
                        <h3 class="poppins-bold title-2">How It Works</h3>
                    </div>
                    <Button title={"Read More"} handleClick={handleClick} btnColor={"btn btn-dark"} arrowright={false} />
                </div>

                <div class="steps-container custom-container">
                    {
                        steps.map((step) => {
                            return <StepsCard stepNo={step.stepNo} title={step.title} description={step.description} imgIcon={step.imgIcon} />
                        })

                    }
                </div>
            </div>
        </div>

    )
}
