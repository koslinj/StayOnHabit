'use client'
import Image from "next/image";
import { FormEvent, useRef, useState } from "react"
import submitImg from "@/public/submit.png"
import closeImg from "@/public/close.png"
import { addHabit } from "@/lib/database/addHabit";
import { addDay } from "@/lib/database/addDay";
import { useRouter } from "next/navigation";

export default function NewHabitButton() {
    const router = useRouter()
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log(name)
        if(!name){
            return setError('Name cannot be empty!')
        }
        const res = await addHabit(name)
        const today = new Date()
        const todayString = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0')
        await addDay(res.habit_id, todayString)
        router.refresh()
        closeModal()
    };

    const openModal = () => {
        modalRef.current?.showModal();
    };

    const closeModal = () => {
        modalRef.current?.close();
        setError('')
    };

    return (
        <>
            <div className="flex justify-center mb-8 items-center">
                <button
                    onClick={openModal}
                    className="bg-gradient-to-b from-orange-400 to-orange-600 p-3 border-2 border-black rounded-2xl text-xl flex justify-center items-center font-semibold italic hover:scale-110 duration-200"
                >
                    New Habit
                </button>
            </div>

            <dialog ref={modalRef} className="relative text-center text-xl p-6 backdrop:bg-black/70 bg-gradient-to-b from-orange-400 to-orange-500 rounded-xl">
                <form onSubmit={onSubmit}>
                    <section className="flex flex-col">
                        <label className="text-2xl font-bold italic" htmlFor="name">Add habit named: </label>
                        <input
                            className="mt-3 outline-none bg-gray-300 rounded-lg border-2 border-gray-300 focus:border-gray-600 p-1"
                            id="name"
                            value={name}
                            onChange={(e) => {setName(e.target.value); setError('')}}
                            placeholder="Name of new habit..."
                        />
                        {error && <p className="text-red-800 font-semibold">{error}</p>}
                    </section>
                    <section className="flex justify-between items-center">
                        <button className="hover:scale-125 duration-200"><Image src={submitImg} alt="submit" width={70} /></button>
                        <button className="hover:scale-125 duration-200" type="button" onClick={closeModal}><Image src={closeImg} alt="close" width={70} /></button>
                    </section>
                </form>
            </dialog>
        </>
    )
}
