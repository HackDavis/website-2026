'use client';

import Image from 'next/image';

export default function Sponsers() {

    const row1_images = [
        { src : "/Images/sponsers/frog.png", url: "https://www.youtube.com/", alt : "frog" },
        { src : "/Images/sponsers/ucdavis-congrats.png", url: "https://www.youtube.com/", alt : "ucdavis congrats" },
    ];

    const row2_images = [
        { src : "", url: "", alt : "" }
    ];

    const row3_images = [
        { src : "", url: "", alt : "" }
    ];

    return (
        <div className='bg-red-200 p-5'>
            <div className='overflow-hidden bg-blue-200 p-2'>
                <div className='flex gap-5 animate-slide-right'>
                    {row1_images.map((image) => (
                        <div key={image.alt} className='p-5 rounded-full bg-green-500 flex-shrink-0 cursor-pointer' onClick={() => window.open(image.url, "_blank")}>
                            <Image src={image.src} alt={image.alt} width={50} height={50} />
                        </div>
                    ))}
                    {row1_images.map((image) => (
                        <div key={`dup-${image.alt}`} className='p-5 rounded-full bg-green-500 flex-shrink-0 cursor-pointer' onClick={() => window.open(image.url, "_blank")}>
                            <Image src={image.src} alt={image.alt} width={50} height={50} />
                        </div>
                    ))}
                </div>
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