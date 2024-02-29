import React, { useEffect } from 'react'
import { part1, part2, part3, part4, part5, part6 } from '@/assets/images/z-index'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function calculateColumnCount(screenWidth) {
    let columnCount;
    if (screenWidth > 768) {
        columnCount = 4;
    } else if (screenWidth > 640 && screenWidth < 768) {
        columnCount = 3;
    } else if (screenWidth <= 640) {
        columnCount = 2;
    } else {
        columnCount = 2;
    }
    return columnCount;
}

export default function DealsOffers() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [kunlar, setKunlar] = useState('');
    const [soatlar, setSoatlar] = useState('');
    const [minutlar, setMinutlar] = useState('');
    const [sekundlar, setSekundlar] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const endDate = new Date("2024-03-05T21:23:09"); // Ohirgi muddatni o'rnating
            const now = new Date();

            const totalSeconds = Math.floor((endDate - now) / 1000); // Millisaniyaga o'tkazish

            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const minutes = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;

            // Kun, soat, minut va sekundlarni ko'rish uchun formatni o'rnatamiz
            const kunlar = `${days}`;
            const soatlar = `${hours}`;
            const minutlar = `${minutes}`;
            const sekundlar = `${seconds}`;

            // Tarzni o'zgartirish kerak bo'lsa, CSS orqali ushbu stilni qo'shing
            setKunlar(kunlar);
            setSoatlar(soatlar);
            setMinutlar(minutlar);
            setSekundlar(sekundlar);

            // Agar muddat tugagan bo'lsa, uni to'xtatamiz
            if (totalSeconds <= 0) {
                clearInterval(intervalId);
                setKunlar("Muddat tugagan!");
            }
        }, 1000);

        // Intervalni bekor qilish uchun
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const columnCount = calculateColumnCount(screenWidth);

  return (
    <div className='bg-white h-full border-y-[1px] flex flex-col lg:flex-row '>
        {/* Deals main timer */}
        <div className='w-full h-full lg:w-[266px] lg:h-[235px] border-[1px] border-slate-400 p-4'>
            <div className=' w-full h-full flex flex-col gap-4'>
                <div>
                    <h3 className='text-[#1C1C1C] text-2xl font-bold'>Deals and offers</h3>
                    <p className='text-[#8B96A5]'>Hygiene equipments</p>
                </div>
                <div className='flex gap-1'>
                    <div className='w-[55px] h-[60px] bg-[#606060] rounded-sm flex items-center justify-center text-white'>
                        <div>
                            <h2 className='font-bold text-xl text-center'>{kunlar}</h2>
                            <p>Days</p>
                        </div>
                    </div>
                    <div className='w-[55px] h-[60px] bg-[#606060] rounded-sm flex items-center justify-center text-white'>
                        <div>
                            <h2 className='font-bold text-xl text-center'>{soatlar}</h2>
                            <p>Hours</p>
                        </div>
                    </div>
                    <div className='w-[55px] h-[60px] bg-[#606060] rounded-sm flex items-center justify-center text-white'>
                        <div>
                            <h2 className='font-bold text-xl text-center'>{minutlar}</h2>
                            <p>Mins</p>
                        </div>
                    </div>
                    <div className='w-[55px] h-[60px] bg-[#606060] rounded-sm flex items-center justify-center text-white'>
                        <div>
                            <h2 className='font-bold text-xl text-center'>{sekundlar}</h2>
                            <p>Sec</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Pruducts */}
        <Swiper
            className='mySwiper w-full h-[235px]  border-y-[1px] border-l-[1px] border-slate-400 flex'
            slidesPerView={ columnCount }
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
        >
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part1} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part2} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-6%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part3} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-8%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part4} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-7%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part5} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-11%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part6} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-9%</div>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}


{/* 
<div className='w-full h-[235px] bg-emerald-300  border-2 border-slate-400 flex overflow-x-auto'>
            <div className='w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part1} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </div>
            <div className='w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part2} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div className=' bg-red-200 px-3 rounded-full text-red-500'>-5%</div>
            </div>
        </div>

*/}