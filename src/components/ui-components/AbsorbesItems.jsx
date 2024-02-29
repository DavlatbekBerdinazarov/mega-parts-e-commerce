import React from 'react'
import { part1, part2, part3, part4, part5, part6, absorbes } from '@/assets/images/z-index'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function AbsorbesItems() {
  return (
    <div className='bg-white h-full border-y-2 flex flex-col lg:flex-row '>
        {/* Main absorbes image */}
        <div className='lg:min-w-[260px] lg:h-[235px]  h-full'>
            <div className='block lg:hidden sm:text-3xl text-2xl font-semibold py-4'>Home and outdoor</div>
            <div className=' w-[260px] h-[235px] hidden lg:block'>
                <img className='w-full h-full' src={absorbes} alt="absorbes" />
            </div>
        </div>
        
        {/* Pruducts */}
        <div className=' overflow-hidden'>
            <Swiper
                className='mySwiper w-full h-[118px]  border-2 border-slate-400 flex'
                slidesPerView={4}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            >
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part1} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part2} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part3} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part4} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part5} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part6} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part1} alt="part1" />
                </SwiperSlide>
                
            </Swiper>
            <Swiper
                className='mySwiper w-full h-[118px]  border-2 border-slate-400 flex'
                slidesPerView={4}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            >
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part1} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part2} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part3} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part4} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part5} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part6} alt="part1" />
                </SwiperSlide>
                <SwiperSlide className='max-w-[223px] h-full border-x-2 border-slate-400 p-2 flex justify-around'>
                    <div>
                        <p>Shock absorbes</p>
                        <div className=' text-slate-400'>For damas</div>
                    </div>
                    <img className='max-w-[80px] max-h-[80px]' src={part1} alt="part1" />
                </SwiperSlide>
            </Swiper>
        </div>

    </div>
  )
}
