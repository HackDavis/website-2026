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

    if (order === 1) {
        frame = (
            <div className="absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#DCE3EA]">
                {picture}
            </div>
        );
    } else if (order === 2) {
        frame = (
            <div className="absolute inset-0 flex justify-center items-center p-2 pb-[40px]">
                {picture}
            </div>
        );
    } else if (order === 3) {
        frame = (
            <div className="absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#BDC7D0]">
                {picture}
            </div>
        );
    } else if (order === 4) {
        frame = (
            <div className="absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#BDC7D0]">
                {picture}
            </div>
        );
    } else {
        frame = (
            <div className="absolute inset-0 flex justify-center items-center p-2 pb-[40px] bg-[#BDC7D0]">
                {picture}
            </div>
        );
    }

    if (type === Type.Square) {
        shape = (
            <div className={`absolute w-[265px] h-[300px] ${order === 1 ? "animate-picture1" : order === 2 ? "animate-picture2" : order === 3 ? "animate-picture3" : order === 4 ? "animate-picture4" : order === 5 ? "animate-picture5" : ""}`}>
                {frame}
            </div>
        );
    } else if (type === Type.Long) {
        shape = (
            <div className={`absolute w-[215px] h-[350px] ${order === 1 ? "animate-picture1" : order === 2 ? "animate-picture2" : order === 3 ? "animate-picture3" : order === 4 ? "animate-picture4" : order === 5 ? "animate-picture5" : ""}`}>
                {frame}
            </div>
        );
    } else if (type === Type.Wide) {
        shape = (
            <div className={`absolute w-[315px] h-[250px] ${order === 1 ? "animate-picture1" : order === 2 ? "animate-picture2" : order === 3 ? "animate-picture3" : order === 4 ? "animate-picture4" : order === 5 ? "animate-picture5" : ""}`}>
                {frame}
            </div>
        );
    } else {
        shape = (
            <div className={`absolute w-[315px] h-[350px] ${order === 1 ? "animate-picture1" : order === 2 ? "animate-picture2" : order === 3 ? "animate-picture3" : order === 4 ? "animate-picture4" : order === 5 ? "animate-picture5" : ""}`}>
                {frame}
            </div>
        );
    }
    return shape;
}

export default function CelebratePast() {
    const [images, setImages] = useState([ //NO DUPLICATE PATHS PLEASEEEEEEEEEEEEEE
        { path: "/placeholder.jpg", alt: "among us", type: Type.Square },
        { path: "/anotherplaceholder.png", alt: "among us!!!", type: Type.Square },
        { path: "/clouds.jpg", alt: "among us!!!", type: Type.Square },
        { path: "/realclouds.jpg", alt: "among us!!!", type: Type.Square },
        { path: "/frog.png", alt: "among us!!!", type: Type.Square },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages(prev => {
                const [first, ...rest] = prev;
                return [...rest, first];
            });
        }, 15000); //15 sec

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="m-10 flex flex-col items-center bg-[#E5EEF1] place-content-center rounded-[20px] shadow-[8px_8px_0_0_#A6BFC7]">
            <div className="m-10 flex flex-col items-center">
                <div className="bg-red-150 m-2">
                    <p className="text-[70px] text-[#123041] font-[var(--font-inter)]">Come Celebrate our past with us!</p>
                </div>
                <div className="bg-red-150">
                    <p className="text-[23px] text-[#123041] font-[var(--font-montserrat)]">We truly could not have done any of this without you. Your support means the world!</p>
                </div>
            </div>
            {/** uhhh the pictures F1F3F8*/}
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                {images.map((image, index) => (
                    <Pictures
                        key={image.path}
                        path={image.path}
                        alt={image.alt}
                        type={image.type}
                        order={index + 1}
                    />
                ))}
            </div>
            <button className="pl-[17px] pr-[17px] pt-[5px] pb-[5px] m-4 mb-[50px] rounded-full bg-[#123041] text-[#F9FBFC]">
                VIEW 2025 WINNERS
            </button>
        </div>
    );
}