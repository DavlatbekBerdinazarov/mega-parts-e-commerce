import AbsorbesItems from '@/components/ui-components/AbsorbesItems'
import BrakeDisks from '@/components/ui-components/BrakeDisks'
import DealsOffers from '@/components/ui-components/DealsOffers'
import HomePageBanner from '@/components/ui-components/HomePageBanner'
import RecomendedItems from '@/components/ui-components/RecomendedItems'
import RequestSendingBanner from '@/components/ui-components/RequestSendingBanner'
import Subscribe from '@/components/ui-components/Subscribe'
import React, { createContext, useEffect, useState } from 'react'
import offersItems from '../data/offers.json'


export default function HomePage() {
  const [offers, setOffers] = useState(offersItems);
  return (
    <>
      <div className=" md:container lg:px-12 px-[15px]">
        <div className='bg-[rgb(248,249,250)]'>
          {/* space */}
          <div className='w-full h-1 mb-4 sm:mb-8'></div>
          <div>
            <HomePageBanner/>
          </div>
          <div className='my-4'>
            <DealsOffers offers={offers}/>
          </div>
          <div className='my-4'>
            <AbsorbesItems absorbes={offers}/>
          </div>
          <div className='my-4'>
            <BrakeDisks brakediscs={offers}/>
          </div>
          <div className='my-8'>
            <RequestSendingBanner/>
          </div>
          <div className='mt-8 mb-24'>
            <RecomendedItems/>
          </div>
        </div>
      </div>
      {/* Subscribe */}
      <div  className=''>
        <Subscribe/>
      </div>
    </>
  )
}
