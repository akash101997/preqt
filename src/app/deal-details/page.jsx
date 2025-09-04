
import React from 'react'
import Namedetailsection from './components/name-section/Namesection' 
import AllDeals from './components/alldeals/AllDeals'

const Page = ({ searchParams }) => {
  const dealId = searchParams?.dealId;
  return (
    <div>
      {dealId ? (
        <Namedetailsection />
      ) : (
        <AllDeals />
      )}
    </div>
  )
}

export default Page