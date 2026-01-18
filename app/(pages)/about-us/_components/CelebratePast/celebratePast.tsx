'use client'

import styles from './celebratePast.module.scss';
import font_string from '@app/(pages)/_globals/fonts';
import { useState, useEffect } from 'react';
import Image from 'next/image';

enum Type {
    Square,
    Long,
    Wide
}

function Pictures({ path, alt, order }: { path: string, alt: string, order: number }) {
    const newOrder = 4 - order; //100 is length of the images

    let picture;


    if (newOrder === 1) {
        picture =  (
            <div className="rotate-[0deg] absolute inset-0 flex justify-center items-center p-2 pb-[60px] bg-[#DCE3EA]">
                <div className="w-[200px] h-[200px]">
                    <Image src={path} alt={alt} width={200} height={200} className="object-fill"/>
                </div>
                {newOrder} {order}
            </div>
        );
    } else if (newOrder === 2) {
        picture =  (
            <div className="rotate-[116.01deg] absolute inset-0 flex justify-center items-center p-2 pb-[60px] bg-[#BDC7D0]">
                <div className="w-[200px] h-[200px]">
                    <Image src={path} alt={alt} width={200} height={200} className="object-cover"/>
                </div>
                
                {newOrder} {order}
            </div>
        );
    } else if (newOrder === 3) {
        picture =  (
            <div className="rotate-[92.8deg] absolute inset-0 flex justify-center items-center p-2 pb-[60px] bg-[#BDC7D0]">
                <div className="w-[200px] h-[200px]">
                    <Image src={path} alt={alt} width={200} height={200} className="object-cover"/>
                </div>
                
                {newOrder} {order}
            </div>
        );
    } else if (newOrder === 4) {
        picture =  (
            <div className="rotate-[76.15deg] absolute inset-0 flex justify-center items-center p-2 pb-[60px] bg-[#BDC7D0]">
                <div className="w-[200px] h-[200px]">
                    <Image src={path} alt={alt} width={200} height={200} className="object-cover"/>
                </div>
                {newOrder} {order}
            </div>
        );
    } else {
        picture =  (
            <div className="rotate-[0deg] absolute inset-0 flex justify-center items-center p-2 pb-[60px] bg-[#BDC7D0]">
                <div className="w-[200px] h-[200px]">
                    <Image src={path} alt={alt} width={200} height={200} className="object-cover"/>
                </div>
                {newOrder} {order}
            </div>
        );
    }



    // 0 116.01 92.8 76.15
    let specificStyle = {
        zIndex: newOrder,
        transform: `rotate(0deg)`
    };
    if (newOrder === 0) {
        //animation = 0;
    } else if (newOrder === 1) {
        //animation = 10;
    } else if (newOrder === 2) {
        //animation = 20;
    } else if (newOrder === 3) {
        //animation = 30;
    }
    return picture;
}

export default function CelebratePast() {
    const [images, setImages] = useState([
        { path: "/placeholder.jpg", alt: "among us", type: Type.Square, order: 1 },
        { path: "/anotherplaceholder.png", alt: "among us!!!", type: Type.Square, order: 2 },
        { path: "/clouds.jpg", alt: "among us!!!", type: Type.Square, order: 3 },
        { path: "/readclouds.jpg", alt: "among us!!!", type: Type.Square, order: 4 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages(prevImages => {
                return prevImages.map(img => ({
                    ...img,
                    order: (img.order + 1) % prevImages.length,
                }));
            });
        }, 2000); //10sec

        return () => clearInterval(interval); //E5EEF1 var(--text-extra-dark)
    }, []);

    const sortedImages = images;
    sortedImages.sort((a, b) => a.order - b.order);
    return (
        <div className="m-10 flex flex-col items-center bg-[#E5EEF1] place-content-center rounded-[20px] shadow-[8px_8px_0_0_#A6BFC7]">
            <div className="m-10 flex flex-col items-center">
                <div className="bg-red-150 m-2">
                    <p className="text-[70px] text-[#123041]">Come Celebrate our past with us!</p>
                </div>
                <div className="bg-red-150">
                    <p className="text-[23px] text-[#123041]">We truly could not have done any of this without you. Your support means the world!</p>
                </div>
            </div>
            {/** uhhh the pictures F1F3F8*/}
            <div className="relative w-[300px] h-[300px]"> {/* Container must be relative */}
                {sortedImages.map((image) => (
                        <Pictures
                            key={image.path}
                            path={image.path}
                            alt={image.alt}
                            order={image.order}
                        />
                ))}
            </div>
            <button className="pl-[17px] pr-[17px] pt-[5px] pb-[5px] m-4 mb-[50px] rounded-full bg-[#123041] text-[#F9FBFC]">
                VIEW 2025 WINNERS
            </button>
        </div>
    );
}