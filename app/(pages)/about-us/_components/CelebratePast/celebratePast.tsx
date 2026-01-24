'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function Pictures({ path, alt, order }: { path: string, alt: string, order: number }) {
    if (order > 5) return null;

    let frame;
    let picture;

    picture = (
        <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] relative overflow-hidden">
            <Image src={path} alt={alt} fill className="object-cover" />
        </div>
    );

    frame = (
        <div className={`p-1 pb-[25px] sm:p-1.5 sm:pb-[35px] lg:p-2.5 lg:pb-[50px] xl:p-4 xl:pb-[70px] absolute flex justify-center items-center ${order === 1 ? "animate-picture1_mobile lg:animate-picture1_laptop bg-[#DCE3EA]" : order === 2 ? "animate-picture2_mobile lg:animate-picture2_laptop bg-[#BDC7D0]" : order === 3 ? "animate-picture3_mobile lg:animate-picture3_laptop bg-[#BDC7D0]" : order === 4 ? "animate-picture4_mobile lg:animate-picture4_laptop bg-[#BDC7D0]" : order === 5 ? "animate-picture5_mobile lg:animate-picture5_laptop bg-[#BDC7D0]" : ""}`}>
            {picture}
        </div>
    );


    return frame;
}

export default function CelebratePast() {
    const [images, setImages] = useState([
        { path: "/placeholder.jpg", alt: "i like among us" },
        { path: "/anotherplaceholder.png", alt: "its pretty cool" },
        { path: "/clouds.jpg", alt: "cheese is also cool" },
        { path: "/realclouds.jpg", alt: "amongsus" },
        { path: "/frog.png", alt: "among us!!!" },
    ]);

    useEffect(() => {
        const handleAnimationEnd = (e: AnimationEvent) => {
            if (e.animationName === 'picture1_mobile' || e.animationName === 'picture1_laptop') {
                setImages(prev => {
                    const [first, ...rest] = prev;
                    return [...rest, first];
                });
            }
        };

        document.addEventListener('animationend', handleAnimationEnd);

        return () => {
            document.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    return ( // remove margin
        <div className="m-14 py-8 sm:py-16 lg:py-20 xl:py-24 rounded-[60px] shadow-[10px_10px_0_0_#A6BFC7] flex flex-col items-center bg-[#E5EEF1] place-content-center">
            <div className=" lg:p-14 flex flex-col items-center">
                <div className="p-2 text-center">
                    <p className="text-[20px] sm:text-[35px] md:text-[33px] lg:text-[40px] xl:text-[60px] 2xl:text-[70px] leading-tight text-[#123041] font-bold font-montserrat">Come celebrate<br className="md:hidden" /> our past with us!</p>
                </div>
                <div className="p-1 text-center">
                    <p className="text-[10px] sm:text-[15px] md:text-[13px] lg:text-[20px] xl:text-[23px] 2xl:text-[30px] text-[#123041] font-jakarta">We truly could not have done any of this<br className="md:hidden" /> without you. Your support means the world!</p>
                </div>
            </div>
            <div className="h-[275px] sm:h-[400px] lg:h-[620px] xl:h-[700px] relative flex items-center justify-center">
                {images.map((image, index) => (
                    <Pictures
                    key={`${image.path}-${index}`}
                    path={image.path}
                    alt={image.alt}
                    order={index + 1}
                    />
                ))}
            </div>
        <button className="px-[20px] py-[8px] sm:px-[25px] sm:py-[10px] lg:px-[27px] lg:py-[10px] xl:px-[30px] rounded-full bg-[#123041] text-[#F9FBFC]">
                <p className="text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium font-jakarta tracking-wide">
                    VIEW 2025 WINNERS
                </p>
            </button>
    </div>
  );
}
