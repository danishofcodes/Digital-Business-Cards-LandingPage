import React from 'react'
import './feature-transparent-card.css'
export default function FeatureTransparentCard({ image, title, description }) {
    return (
        <div className='feature-transparent-card-container'>
            <div className='feature-transparent-card-image'>
                <img src={image} />
            </div>
            <div className='feature-transparent-card-content'>
                <h4 className='feature-transparent-card-title'>
                    {title}
                </h4>
                <p className='feature-transparent-card-description'>
                    {description}
                </p>

            </div>
        </div>
    )
}
