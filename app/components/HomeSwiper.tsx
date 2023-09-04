"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import showing2 from "@/public/showing-2.png"
import showing3 from "@/public/showing-3.png"
import showing4 from "@/public/showing-4.png"
import showing5 from "@/public/showing-5.png"
import showing6 from "@/public/showing-6.png"

export default function HomeSwiper() {
    return (
        <div className="bg-orange-500/50 rounded-2xl mt-12 w-[300px] sm:w-[550px] md:w-[700px] lg:w-[930px] xl:w-full">
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                rewind={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                centeredSlides={true}
            >
                <SwiperSlide className="my-auto">
                    <div className="flex justify-center pt-2 pb-8 md:px-12">
                        <Image height={500} placeholder="blur" className="border-2 border-orange-400 p-2 rounded-xl" src={showing2} alt="image showing look of website" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="my-auto">
                    <div className="flex justify-center pt-2 pb-8 md:px-12">
                        <Image height={500} placeholder="blur" className="border-2 border-orange-400 p-2 rounded-xl" src={showing3} alt="image showing look of website" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="my-auto">
                    <div className="flex justify-center pt-2 pb-8 md:px-12">
                        <Image height={500} placeholder="blur" className="border-2 border-orange-400 p-2 rounded-xl" src={showing4} alt="image showing look of website" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="my-auto">
                    <div className="flex justify-center pt-2 pb-8 md:px-12">
                        <Image height={500} placeholder="blur" className="border-2 border-orange-400 p-2 rounded-xl" src={showing5} alt="image showing look of website" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="my-auto">
                    <div className="flex justify-center pt-2 pb-8 md:px-12">
                        <Image height={500} placeholder="blur" className="border-2 border-orange-400 p-2 rounded-xl" src={showing6} alt="image showing look of website" />
                    </div>
                </SwiperSlide>
            </Swiper >
        </div>
    )
}
