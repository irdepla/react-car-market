import React from 'react';
import "./index.css"

const Hero = () => {
    return (
        <>
        <section className='hero'>
        <div className="container ">
            <div className="hero__wrapper flex items-center gap-8 ">
                <div className="hero__card__first-child rounded-[10px] flex flex-col  justify-between items-start pl-6 pt-6 pb-[112px]">
                    <h2 className=' text-[32px] font-semibold text-white '>
                    The Best Platform <br /> for Car Rental
                    </h2>
                    <p className=' font-medium text-base text-white '>
                    Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
                    </p>
                    <button className=' rounded bg-[#3563E9] py-[10px] px-5 text-white  text-base font-semibold'>
                    Rental Car
                    </button>
                </div>
                <div className="hero__card__last-child rounded-[10px] flex flex-col  justify-between items-start pl-6 pt-6 pb-[112px]">
                    <h2 className=' text-[32px] font-semibold text-white '>
                    Easy way to rent a <br /> car at a low price
                    </h2>
                    <p className=' font-medium text-base text-white '>
                    Providing cheap car rental services <br /> and safe and comfortable facilities.
                    </p>
                    <button className=' rounded bg-[#54A6FF] py-[10px] px-5 text-white  text-base font-semibold'>
                    Rental Car
                    </button>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Hero;
