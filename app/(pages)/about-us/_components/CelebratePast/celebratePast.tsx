'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function Pictures({ path, alt, order }: { path: string, alt: string, order: number }) {
    if (order > 5) return null;
    let frame;
    let picture;

    picture = (
        <div className="w-[250px] h-[250px] relative overflow-hidden">
            <Image src={path} alt={alt} fill className="object-cover" />
        </div>
    );

    frame = (
        <div className={`p-2 pb-[40px] absolute flex justify-center items-center ${order === 1 ? "animate-picture1 bg-[#DCE3EA]" : order === 2 ? "animate-picture2 bg-[#BDC7D0]" : order === 3 ? "animate-picture3 bg-[#BDC7D0]" : order === 4 ? "animate-picture4 bg-[#BDC7D0]" : order === 5 ? "animate-picture5 bg-[#BDC7D0]" : ""}`}>
            {picture}
        </div>
    );


    return frame;
}

export default function CelebratePast() {
    const [images, setImages] = useState([ 
        { path: "/placeholder.jpg", alt: "i like among us"  },
        { path: "/anotherplaceholder.png", alt: "its pretty cool"  },
        { path: "/clouds.jpg", alt: "cheese is also cool"  },
        { path: "/realclouds.jpg", alt: "amongsus"  },
        { path: "/frog.png", alt: "among us!!!"  },
    ]);

    useEffect(() => {
        const handleAnimationEnd = (e: AnimationEvent) => {
            if (e.animationName === 'picture1') {
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

    return (
        <div className="m-10 rounded-[50px] shadow-[8px_8px_0_0_#A6BFC7] flex flex-col items-center bg-[#E5EEF1] place-content-center">
            <div className="m-10 flex flex-col items-center">
                <div className="m-2">
                    <p className="text-[70px] text-[#123041] font-bold font-montserrat">Come celebrate our past with us!</p>
                </div>
                <div className="m-1">
                    <p className="text-[23px] text-[#123041] italic font-jakarta">We truly could not have done any of this without you. Your support means the world!</p>
                </div>
            </div>
            <div className="w-[300px] h-[600px] relative flex items-center justify-center">
                {images.map((image, index) => (
                    <Pictures
                        key={`${image.path}-${index}`}
                        path={image.path}
                        alt={image.alt}
                        order={index + 1}
                    />
                ))}
            </div>
            <button className="pl-[22px] pr-[22px] pt-[8px] pb-[8px] m-4 mb-[50px] rounded-full bg-[#123041] text-[#F9FBFC]">
                <p className="text-[20px] font-jakarta">VIEW 2025 WINNERS</p>
            </button>
        </div>
    );
}