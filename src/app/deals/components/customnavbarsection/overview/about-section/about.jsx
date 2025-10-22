"use client";
import { useDealStore } from '@/store/dealStore';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const About = ({ isPrivateDeal }) => {
  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");
  const dealDetails = useDealStore((state) => state.dealDetails);
  const dealData = dealDetails?.data?.deal_overview;

  
  if (!dealData?.about?.status) return null;

  return (
    <section className="about-section">
      <h4>About</h4>
      <p>{dealData?.about?.data}</p> {/* render the about text */}
    </section>
  );
};

export default About;
