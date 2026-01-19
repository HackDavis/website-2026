'use client'

import React from 'react';
import styles from './celebratePast.module.scss';
import font_string from '@app/(pages)/_globals/fonts';
import { useState, useEffect } from 'react';
import Image from 'next/image';

enum Type {
    Square,
    Long,
    Wide
}

function Pictures({ path, alt, type, order }: { path: string, alt: string, type: Type, order: number }) {
    const newOrder = 4 - order; //100 is length of the images

    let shape;
    let frame;
    let picture;

    if (type === Type.Square) {
        picture = (
            <div className="relative w-[250px] h-[250px] bg-red-500 overflow-hidden">
                <Image src={path} alt={alt} fill className="object-cover" />
            </div>
        );
    } else if (type === Type.Long) {
        picture = (
            <div className="relative w-[200px] h-[300px] bg-red-500 overflow-hidden">
                <Image src={path} alt={alt} fill className="object-cover" />
            </div>
        );
    } else if (type === Type.Wide) {
        picture = (
            <div className="relative w-[300px] h-[200px] bg-red-500 overflow-hidden">
                <Image src={path} alt={alt} fill className="object-cover" />
            </div>
        );
    } else {
        picture = (
            <p>ERROR: Unknown type of Image</p>
        );
    }

    if (newOrder === 1) {
        frame = (
            <div className="rotate-[0deg] absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#DCE3EA]">
                {picture}
            </div>
        );
    } else if (newOrder === 2) {
        frame = (
            <div className="rotate-[345deg] translate-x-[-100px] translate-y-[-40px] absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#BDC7D0]">
                {picture}
            </div>
        );
    } else if (newOrder === 3) {
        frame = (
            <div className="rotate-[-5deg] translate-y-[-100px] absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#BDC7D0]">
                {picture}
            </div>
        );
    } else if (newOrder === 4) {
        frame = (
            <div className="rotate-[20deg] translate-x-[100px] translate-y-[-30px] absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#BDC7D0]">
                {picture}
            </div>
        );
    } else {
        frame = (
            <div className="rotate-[0deg] absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#BDC7D0]">
                {picture}
            </div>
        );
    }

    if (type === Type.Square) {
        shape = (
            <div className="absolute w-[265px] h-[300px] animate-enter1">
                {frame}
            </div>
        );
    } else if (type === Type.Long) {
        shape = (
            <div className="absolute w-[215px] h-[350px] animate-enter1">
                {frame}
            </div>
        );
    } else if (type === Type.Wide) {
        shape = (
            <div className="absolute w-[315px] h-[250px] animate-enter1">
                {frame}
            </div>
        );
    } else {
        shape = (
            <div className="absolute w-[315px] h-[350px] animate-enter1">
                {frame}
            </div>
        );
    }
    return shape;
}

export default function CelebratePast() {
    const [images, setImages] = useState([
        { path: "/placeholder.jpg", alt: "among us", type: Type.Square, order: 1 },
        { path: "/anotherplaceholder.png", alt: "among us!!!", type: Type.Long, order: 2 },
        { path: "/clouds.jpg", alt: "among us!!!", type: Type.Wide, order: 3 },
        { path: "/realclouds.jpg", alt: "among us!!!", type: Type.Wide, order: 4 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages(prevImages => {
                return prevImages.map(img => ({
                    ...img,
                    order: (img.order + 1) % prevImages.length,
                }));
            });
        }, 10000); //10sec

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
            <div className="relative w-[300px] h-[300px] flex items-center justify-center"> 
                {sortedImages.map((image) => (
                    <Pictures
                        key={image.path}
                        path={image.path}
                        alt={image.alt}
                        type={image.type}
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