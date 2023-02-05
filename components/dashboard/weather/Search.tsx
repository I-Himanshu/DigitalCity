import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io';
import { ImCross } from "react-icons/im";
export default function Search({city,setCity}) {
    const hours = new Date().getHours();
    const [width, setWidth] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [animate, setAnimate] = useState(false);
    const [error, setError] = useState('No error.');
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setWidth(false);
        if (inputValue !== '') {
            setCity(inputValue);
        }
        if (inputValue == '') {
            setAnimate(true);
            setError('Please enter a value');
            setTimeout(() => {
                setAnimate(false);
            }, 500);
            setWidth(false);
        } else {
            setWidth(true);
            setTimeout(() => {
                setWidth(false);
            }, 500);
        }
        setInputValue('');
    };
    return (
        <div className="relative flex flex-col justify-center items-center z-20 w-full max-w-[600px]">
            <form
            className={`${animate ? 'animate-shake' : 'animate-none'} h-12 bg-white/10 w-full rounded-full backdrop-blur-[100px] mb-8 overflow-hidden shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] focus:scale-[1.02] focus:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)]`}>
            <div className='h-full relative flex items-center justify-between overflow-hidden'>
                <input value={inputValue}
                    onChange={(e) => handleInput(e)}
                    className='flex-1 bg-transparent outline-none placeholder:text-white/40 text-white/40 text-[15px] font-light pl-6 h-full'
                    type='text'
                    placeholder='Enter city or country'
                />
                <button
                    onClick={(e) => handleSubmit(e)}
                    className={`absolute right-0 top-0 bt${hours} opacity-30 hover:opacity-90 transition-all duration-300 ${width ? 'hover:w-full' : 'hover:w-24'} h-12 w-24 rounded-full flex justify-center items-center backdrop-blur-[32px]`}
                >
                    <IoMdSearch className='text-2xl text-white' />
                </button>
            </div>
        </form>
        <div className={`${animate ? 'flex' : 'hidden'} w-full max-w-[600px] absolute top-16 left-[50%] translate-x-[-50%] min-h-[20px] bg-red-500/50 text-white/40 backdrop-blur-[100px] flex-row items-center p-5 py-2 shadow-sm rounded-sm`}>
            <p>{error}</p>
            <p className='absolute top-2 right-3 cursor-pointer transition-all hover:text-white/70'> <ImCross/> </p>
        </div>
        </div>
    )
}
