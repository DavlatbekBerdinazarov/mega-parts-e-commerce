import AbsorbesItems from '@/components/ui-components/AbsorbesItems'
import BrakeDisks from '@/components/ui-components/BrakeDisks'
import DealsOffers from '@/components/ui-components/DealsOffers'
import HomePageBanner from '@/components/ui-components/HomePageBanner'
import RecomendedItems from '@/components/ui-components/RecomendedItems'
import RequestSendingBanner from '@/components/ui-components/RequestSendingBanner'
import Subscribe from '@/components/ui-components/Subscribe'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <div className=" md:container sm:px-4 px-1">
        <div className='bg-[rgb(248,249,250)]'>
          <div>
            <HomePageBanner/>
          </div>
          <div className='my-4'>
            <DealsOffers/>
          </div>
          <div className='my-4'>
            <AbsorbesItems/>
          </div>
          <div className='my-4'>
            <BrakeDisks/>
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
