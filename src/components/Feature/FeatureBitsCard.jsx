import React from 'react'
import './feature-bits.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function FeatureBitsCard({title, description, link, imgIcon}) {
  return (
    <div className="feature-bits-card">
  <div className="feature-bits-card-icon">
    <img src={imgIcon} alt="Feature Icon" />
  </div>
  <h3 className="feature-bits-card-title">{title}</h3>
  <p className="feature-bits-card-description poppins-light">
{description}
  </p>
  <a href={link} className="read-more-link">Read More <FontAwesomeIcon icon={faArrowRight}/></a>
</div>
  )
}
