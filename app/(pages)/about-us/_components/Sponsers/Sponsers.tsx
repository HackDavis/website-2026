'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

function SponsorElement({ src, url, alt }: { src: string; url: string; alt: string }) {
    return (
        <div className={`relative bg-[#612D72] rounded-[5%] w-[30%] aspect-[1/${1}] flex items-center justify-center`}>
            <div className="absolute inset-[10%]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                />
            </div>
        </div>

    );
}



export default function Sponsers() {

    const row1_images = [
        { id: "abbott", src: "/Images/sponsers/abbottlogo.png", url: "https://www.youtube.com/", alt: "frog" },
        { id: "nike", src: "/Images/sponsers/nikelogo.png", url: "https://www.youtube.com/", alt: "ucdavis congrats" },
        { id: "abbott", src: "/Images/sponsers/abbottlogo.png", url: "https://www.youtube.com/", alt: "frog" },
    ];

    return (
        <div className='bg-red-200 p-5'>
            <div className='flex flex-row overflow-hidden bg-[#3F1959] p-2 justify-center'>
                <div className='inline-flex gap-5 pl-5 animate-test whitespace-nowrap w-max'>
                    {row1_images.map((image) => (
                        <SponsorElement key={`${image.id}-1`} src={image.src} url={image.url} alt={image.alt} />
                    ))}
                </div>
                <div className='inline-flex gap-5 pl-5 animate-test whitespace-nowrap w-max'>
                    {row1_images.map((image) => (
                        <SponsorElement key={`${image.id}-2`} src={image.src} url={image.url} alt={image.alt} />
                    ))}
                </div>
                <div className='inline-flex gap-5 pl-5 animate-test whitespace-nowrap w-max'>
                    {row1_images.map((image) => (
                        <SponsorElement key={`${image.id}-3`} src={image.src} url={image.url} alt={image.alt} />
                    ))}
                </div>
            </div>
        </div>
    );
}
