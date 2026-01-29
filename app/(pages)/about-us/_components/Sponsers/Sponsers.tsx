'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRef } from 'react';


export default function Sponsers() {

    const row1_images_unique = [
        { id: "frog", src: "/Images/sponsers/frog.png", url: "https://www.youtube.com/", alt: "frog" },
        { id: "ucdavis", src: "/Images/sponsers/ucdavis-congrats.png", url: "https://www.youtube.com/", alt: "ucdavis congrats" },
        { id: "ucdavis2", src: "/Images/sponsers/ucdavis-congrats.png", url: "https://www.youtube.com/", alt: "ucdavis congrats" },
    ];
    const idCounter = useRef(0);


    const [row1_images, setRow1_images] = useState([
        { id: "frog", src: "/Images/sponsers/frog.png", url: "https://www.youtube.com/", alt: "frog" },
        //{ src: "/Images/sponsers/ucdavis-congrats.png", url: "https://www.youtube.com/", alt: "ucdavis congrats" },
    ]);

    const [displayIndex, setDisplayIndex] = useState(0);


    const row2_images = [
        { src: "", url: "", alt: "" }
    ];

    const row3_images = [
        { src: "", url: "", alt: "" }
    ];

    const handleAnimationEnd = (id: string) => {
        setRow1_images(prev =>
            prev.filter(image => image.id !== id)
        );
        idCounter.current--;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setRow1_images(prev => [
                ...prev,
                {
                    ...row1_images_unique[displayIndex],
                    id: `${row1_images_unique[displayIndex].id}-${idCounter.current++}`
                }
            ]);

            setDisplayIndex(prev =>
                (prev + 1) % row1_images_unique.length
            );

            // then account for end animation
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-red-200 p-5'>
            {row1_images_unique[displayIndex].id}
            -hi--
            {row1_images.length}
            <div className='flex flex-row overflow-hidden bg-blue-200 p-2'>

                {row1_images.map((image) => (
                    <div
                        key={image.id}
                        className="animate-slide-left p-5 rounded-full bg-green-500 cursor-pointer w-16"
                        onAnimationEnd={(e) => {
                            if (e.target === e.currentTarget) {
                                handleAnimationEnd(image.id);
                            }
                        }}
                        onClick={() => window.open(image.url, "_blank")}
                    >
                        {image.id}
                        <Image src={image.src} alt={image.alt} width={50} height={50} />
                    </div>
                ))}

                {/*<div className='flex gap-5 animate-slide-right'>
                    {row1_images.slice(0, displayCount).map((image) => (
                        <div key={image.alt} className='p-5 rounded-full bg-green-500 flex-shrink-0 cursor-pointer' onClick={() => window.open(image.url, "_blank")}>
                            <Image src={image.src} alt={image.alt} width={50} height={50} />
                        </div>
                    ))}
                </div>*/}
            </div>
            <div>
                {row2_images.map((image, index) => (
                    <div key={index} onClick={() => window.open(image.url, "_blank")}>
                        <Image src={image.src} alt={image.alt} />
                    </div>
                ))
                }
            </div>
            <div>
                {row3_images.map((image, index) => (
                    <div key={index} onClick={() => window.open(image.url, "_blank")}>
                        <Image src={image.src} alt={image.alt} />
                    </div>
                ))
                }
            </div>
        </div>
    );
}
