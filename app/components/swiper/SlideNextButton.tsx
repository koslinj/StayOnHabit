"use client"
import { useSwiper } from 'swiper/react';
import rightIcon from '@/public/right.png'
import Image from 'next/image';
import { useEffect } from 'react';

export default function SlideNextButton() {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(14, 800, false)
    }, [])
    
    return (
        <div onClick={() => swiper.slideNext()} className="z-10 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white border-2 border-black flex items-center justify-center flex-shrink-0 hover:scale-125 duration-300 absolute top-1/2 -translate-y-1/2 right-4">
            <Image className="w-8 md:w-16" src={rightIcon} alt="Right Icon" />
        </div>
    );
}