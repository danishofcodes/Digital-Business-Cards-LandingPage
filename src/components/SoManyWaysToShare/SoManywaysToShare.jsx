import React from 'react'
import FeatureTransparentCard from '../Feature/FeatureTransparentCard'
import './ways-to-share.css';
import qrshare from '../../assets/qrshare.png';
import phoneshare from '../../assets/phoneshare.png';
import socialmediashare from '../../assets/socialmediashare.png';


export default function SoManywaysToShare() {
    return (
        <div className='mb-4'>
            <div className='ways-to-share-container'>
                <div className='darkbg'>
                    <div className='custom-container '>
                        <h4 class="poppins-regular title-2 text-light">The How</h4>
                        <h3 class="poppins-bold title-2 2 text-light">So many <span className='highlighted'>ways to share</span></h3>
                        <p className='text-light'>
                            Your digital business card your choice <br />
                            Onetaag provides you with the most sharing options
                        </p>
                    </div>

                    <div className='feature-transparent-cards-sec custom-container '>
                        <FeatureTransparentCard image={qrshare} title={"Onetaag"} description={" mollitia adipisci illo, accusantium ab dolore? Aperiam, alias odio! Maiores, fuga ullam. Laborum?"} />
                        <FeatureTransparentCard image={phoneshare} title={"Onetaag"} description={" mollitia adipisci illo, accusantium ab dolore? Aperiam, alias odio! Maiores, fuga ullam. Laborum?"} />
                        <FeatureTransparentCard image={socialmediashare} title={"Onetaag"} description={" mollitia adipisci illo, accusantium ab dolore? Aperiam, alias odio! Maiores, fuga ullam. Laborum?"} />
                    </div>
                </div>
            </div>
        </div>

    )
}
