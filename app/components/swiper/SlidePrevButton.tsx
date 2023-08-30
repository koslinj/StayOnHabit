"use client"
import { useSwiper } from 'swiper/react';
import leftIcon from '@/public/left.png'
import Image from 'next/image';

export default function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <div onClick={() => swiper.slidePrev()} className="z-10 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center flex-shrink-0 hover:scale-125 duration-300 absolute top-1/2 -translate-y-1/2 left-4">
            <Image className="w-8 md:w-16" src={leftIcon} alt="Left Icon" />
        </div>
    );
}