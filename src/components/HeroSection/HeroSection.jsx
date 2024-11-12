import React from "react";
import Button from "../button/Button";
import cardImg from "../../assets/cardimage.png";
import handCardImg from "../../assets/handcard.png";
import teamsImg from "../../assets/forteams.png";
import measureMonitorImg from "../../assets/measuremonitor.png";



import "./hero-section.css";
import FeatureShortDescribe from "../Feature/FeatureShortDescribe";
import FeatureLongDescribe from "../Feature/FeatureLongDescribe";
import { faLocation, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";


export default function HeroSection() {
    function handleClick() {
        console.log("works");
    }

    const MeasureMonitorManageDetails = [
        {
            title: "Admin Control Panel",
            description: "perspiciatis eum blanditiis dolorem vero corrupti voluptates.",
            imgIcon: faSearch
        },

        {
            title: "Track performance Metrics",
            description: "perspiciatis eum blanditiis dolorem vero corrupti voluptates.",
            imgIcon: faTree
        },

        {
            title: "Control user Profile",
            description: "perspiciatis eum blanditiis dolorem vero corrupti voluptates.",
            imgIcon: faPerson
        },
        {
            title: "Monitor your teams",
            description: "perspiciatis eum blanditiis dolorem vero corrupti voluptates.",
            imgIcon: faLocation
        }

    ]
    return (
        <div className="mb-4">
            <div className="hero-section custom-container mb-4">
                <div className="hero-text">
                    <h1 className="title-1 poppins-semibold">
                        Digital Business Cards More Than
                        <span className="highlighted"> Just Card</span>
                    </h1>
                    <h4 className="description poppins-regular">
                        Imagine a digital toolset that transforms your business interactions
                        — where each connection is a step towards greater visibility and
                        success.
                    </h4>
                    <div className="hero-buttons">
                        <Button
                            title={"Create Your Free Profile"}
                            handleClick={handleClick}
                            btnColor={"btn btn-dark"}
                            arrowright={false}
                        />
                        <Button
                            title={"For Teams"}
                            handleClick={handleClick}
                            btnColor={"btn btn-light-outline"}
                            arrowright={true}
                        />
                    </div>
                </div>

                <div className="hero-image-container">
                    <div className="hero-image bg-yellowpink">
                        <img src={handCardImg} alt="Illustration of Digital Business Card" />
                    </div>
                </div>
            </div>

            <div class="feature-details custom-container mb-4">
                <div className="feature-image-container">
                    <div className="feature-image bg-yellowpink">
                        <img src={teamsImg} className="forteamspic" alt="Illustration of Digital Business Card" />
                    </div>
                </div>
                <div className="content">
                    <h3 className="poppins-regular title-2">For Teams</h3>
                    <h3 className="poppins-bold title-2">
                        The #1 Platform for <span className="highlighted">Teams, SMBs & Enterprises</span>
                    </h3>
                    <FeatureShortDescribe description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eveniet aspernatur veritatis, numquam sint exercitationem quisquam minima tempore fuga modi vitae repudiandae ab illo ea rerum dolore voluptate explicabo iste! perspiciatis eum blanditiis dolorem vero corrupti voluptates.perspiciatis eum blanditiis dolorem vero corrupti voluptates."} />
                    <Button title={"Read More"} handleClick={handleClick} btnColor={"btn btn-dark"} arrowright={false} />
                </div>
            </div>


            <div class="feature-details flipposition custom-container mb-4">
                <div className='content'>
                    <h3 className='poppins-regular title-2' >Measure, Monitor and Manage</h3>
                    <h3 className='poppins-bold title-2 highlighted' >Your teams</h3>
                    
                    <div className='description poppins-regular'>
                        <FeatureLongDescribe details={MeasureMonitorManageDetails} />
                    </div>
                </div>
          
                <div className="feature-image-container">
                    <div className="feature-image bg-yellowpink">
                        <img  className="measuremonitorpic" src={measureMonitorImg} alt="Illustration of Digital Business Card" />
                    </div>
                </div>
            </div>
        </div>
    );
}
