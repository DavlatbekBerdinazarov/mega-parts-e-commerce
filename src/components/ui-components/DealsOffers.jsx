import React from 'react'
import { part1, part2, part3, part4, part5, part6 } from '@/assets/images/z-index'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function DealsOffers() {
  return (
    <div className='bg-white h-full border-y-2 flex flex-col lg:flex-row '>
        {/* Deals main timer */}
        <div className='w-full h-full lg:w-[266px] lg:h-[235px] border-2 border-slate-400 p-4'>
            <div className=' w-full h-full flex flex-col gap-4'>
                <div>
                    <h3 className='text-[#1C1C1C] text-2xl font-bold'>Deals and offers</h3>
                    <p className='text-[#8B96A5]'>Hygiene equipments</p>
                </div>
                <div className='flex gap-1'>
                    <div className='w-[55px] h-[60px] bg-[#606060] rounded-sm flex items-center justify-center text-white'>
                        <div>
                            <h2 className='font-bold text-xl text-center'>04</h2>
                            <p>Days</p>
                        </div>
                    </div>
                    <div className='w-[55px] h-[60px] bg-[#606060] rounded-sm flex items-center justify-center text-white'>
                        <div>
                            <h2 className='font-bold text-xl text-center'>13</h2>
                            <p>Hours</p>
                        </div>
                    </div>
                    <div className='w-[55px] h-[60px] bg-[#606060] rounded-sm flex items-center justify-center text-white'>
                        <div>
                            <h2 className='font-bold text-xl text-center'>34</h2>
                            <p>Mins</p>
                        </div>
                    </div>
                    <div className='w-[55px] h-[60px] bg-[#606060] rounded-sm flex items-center justify-center text-white'>
                        <div>
                            <h2 className='font-bold text-xl text-center'>56</h2>
                            <p>Sec</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Pruducts */}
        <Swiper
            className='mySwiper w-full h-[235px]  border-2 border-slate-400 flex'
            slidesPerView={4}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
        >
            <SwiperSlide className='max-w-[179px] h-full border-x-2 border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part1} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-x-2 border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part2} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-x-2 border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part3} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-x-2 border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part4} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-x-2 border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part5} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-x-2 border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part6} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}


{/* 
<div className='w-full h-[235px] bg-emerald-300  border-2 border-slate-400 flex overflow-x-auto'>
            <div className='w-[179px] h-full border-x-2 border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part1} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </div>
            <div className='w-[179px] h-full border-x-2 border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part2} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </div>
        </div>

*/}