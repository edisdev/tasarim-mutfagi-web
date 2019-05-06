import React from 'react'
import Image from 'gatsby-image'

function EventPhotos({ photos }) {
  return (
    <div className="col-md-12 offset-md-6 offset-lg-5 offset-xl-4 SectionEvent-photos">
      <div className="row">
        <div className="col-2">
          <Image fluid={photos[0].childImageSharp.fluid} />
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-12">
              <Image fluid={photos[1].childImageSharp.fluid} />
            </div>
            <div className="col-4">
              <Image fluid={photos[2].childImageSharp.fluid} />
            </div>
            <div className="col-8">
              <Image fluid={photos[3].childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="row">
            <div className="col-12">
              <Image fluid={photos[4].childImageSharp.fluid} />
            </div>
            <div className="col-12">
              <Image fluid={photos[5].childImageSharp.fluid} />
            </div>
            <div className="col-12">
              <Image fluid={photos[6].childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <Image fluid={photos[7].childImageSharp.fluid} />
            </div>
            <div className="col-3">
              <Image fluid={photos[8].childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPhotos
