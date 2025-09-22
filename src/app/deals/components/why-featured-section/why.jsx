import React from 'react'
import { PrivateDart, PrivateFire, PrivateGrowth, PrivateNetwork, PublicDart, PublicFire, PublicGrowth, PublicNetwork } from './SvgIcon'

const Featured = ({ isPrivateDeal }) => {
  return (

    <section className="why-section">
      <h2>Why This is Featured on Preqt</h2>
      <section>
        <div className="why-subsection">
          <div>
            {isPrivateDeal ? <PrivateDart /> : <PublicDart />}

            {isPrivateDeal ? <h4> Experienced, Vision-Led Founding Team</h4> : <h4>Knowledge & Experience of  Promotors</h4>}

          </div>
          <div>
            {isPrivateDeal ? <PrivateFire /> : <PublicFire />}
            {isPrivateDeal ? <h4>End-to-End Execution Model</h4> : <h4>Scalable & Flexible  Fleet Model</h4>}

          </div>
        </div>

        <div className="why-subsection">
          <div>
            {isPrivateDeal ? <PrivateGrowth/> : <PublicGrowth/>}
            {isPrivateDeal ? <h4>Capacity Expansion and High-Growth Plans</h4> : <h4>Elivia - Vehicle Tracking Technology</h4>}
          </div>
          <div>
          {isPrivateDeal? <PrivateNetwork/> : <PublicNetwork/>}
            {isPrivateDeal ? <h4>Diversified Revenue Streams</h4> : <h4>Robust Network</h4>}

          </div>
        </div>
      </section>
    </section>

  )
}

export default Featured