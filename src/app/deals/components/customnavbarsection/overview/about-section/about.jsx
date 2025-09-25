"use client";
import { useSearchParams } from 'next/navigation';
import React from 'react'

const About = ({isPrivateDeal}) => {

  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");

  return (
    <div> <section className="about-section">
      <h4>About</h4>
      {!isPrivateDeal? <p>
        The company offers a wide range of service offerings to meet diverse transportation needs. It provides Full Container Load (Reefer), which is temperature-controlled transport for perishable goods, and Full Container Load (Dry), offering standard transport for non-perishable goods. For cost-effective solutions, it offers Loose Container Load, which consolidates shipments for efficient transport. Additionally, the company specializes in Over-Dimensional Cargo, providing customized transport services for oversized industrial and construction equipment.
      </p> : <p>HVR Solar Pvt. Ltd. is a solar energy company specializing in manufacturing PV modules and delivering turnkey solar solutions across India and abroad. With a strong presence in 15 Indian states, HVR offers end-to-end solar services for commercial, industrial, and government clients. Its expansion to a 600 MW capacity plant reflects its ambition to be a Tier-1 OEM, driving affordable and sustainable solar adoption in emerging markets.                                                </p>}
    </section></div>
  )
}

export default About