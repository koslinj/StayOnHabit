"use client"
import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SlidePrevButton from "./SlidePrevButton"
import SlideNextButton from "./SlideNextButton"
import 'swiper/css';
import SquaresList from "../SquaresList"
import { getPast60Days } from "@/lib/utils"

type Props = {
    habits: Habit[]
    allDays: DaysRow[]
}

export default function DaysSwiper({ allDays, habits }: Props) {
    const days = getPast60Days()
    const outputDaysArray = []
    for (let i = 0; i < 15; i++) {
        outputDaysArray.push(days.splice(0, 4))
    }

    return (
        <div className="flex mt-10">
            <div className="lg:min-w-fit flex flex-col justify-around items-center text-lg lg:text-2xl mr-4">
                {habits.map((item, index) => (
                    <p key={index}>
                        {item.name}
                    </p>
                ))}
            </div>
            <Swiper
                slidesPerView={1}
                //initialSlide={14}
                slidesOffsetAfter={30}
                slidesOffsetBefore={30}
                breakpoints={
                    {
                        600: {
                            slidesPerView: 2
                        },
                        900: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        },
                        1450: {
                            slidesPerView: 5
                        }
                    }
                }
                freeMode={true}
                modules={[FreeMode]}
                className="relative"
            >
                <SlidePrevButton />
                {outputDaysArray.map((item, index) => (
                    <SwiperSlide key={index} >
                        <div className="flex flex-col justify-center items-center">
                            {habits.map((habit, i) => (
                                <SquaresList key={i} days={item} allDays={allDays} habit_id={habit.habit_id} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
                <SlideNextButton />
            </Swiper >
        </div>

    )
}
