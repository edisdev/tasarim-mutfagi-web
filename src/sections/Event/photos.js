import React from 'react'
import Image from 'gatsby-image'

function EventPhotos({ photos }) {
  return (
    <div className="col-md-12 offset-md-7 offset-lg-5 SectionEvent-photos">
      <div className="row">
        <div className="col-2">
          <Image fluid={photos[0].node.childImageSharp.fluid} />
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-12">
              <Image fluid={photos[1].node.childImageSharp.fluid} />
            </div>
            <div className="col-4">
              <Image fluid={photos[2].node.childImageSharp.fluid} />
            </div>
            <div className="col-8">
              <Image fluid={photos[3].node.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="row">
            <div className="col-12">
              <Image fluid={photos[4].node.childImageSharp.fluid} />
            </div>
            <div className="col-12">
              <Image fluid={photos[5].node.childImageSharp.fluid} />
            </div>
            <div className="col-12">
              <Image fluid={photos[6].node.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <Image fluid={photos[7].node.childImageSharp.fluid} />
            </div>
            <div className="col-3">
              <Image fluid={photos[8].node.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPhotos
