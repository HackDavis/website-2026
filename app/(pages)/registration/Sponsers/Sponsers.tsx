'use client';

import Image from 'next/image';

function SponsorElement({ src, url, alt }: { src?: string; url?: string; alt?: string }) {
    return (
        <div className={`relative flex-shrink-0 bg-[#612D72] rounded-[3vw] w-[30vw] h-[20vw] flex items-center justify-center`}>
            <div className="absolute inset-[10%]" >
                <a href={url ? url : "#"} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                    <Image
                        src={src ? src : "/Images/sponsers/abbottlogo.png"} // default image
                        alt={alt ? alt : "Unknown sponsor logo"}
                        fill
                        className="object-contain"
                    />
                </a>

            </div>
        </div>

    );
}

function SponserRow({ rowImages, rowNum }: { rowImages: { id: string; src?: string; url?: string; alt?: string }[], rowNum: number }) {
    return (
        <div className='flex flex-row inline-flex overflow-hidden justify-center'>
            <div className={'flex flex-row inline-flex gap-[2vw] hover:[animation-play-state:paused] ' + (rowNum === 1 ? 'animate-sponsers-row1' : rowNum === 2 ? 'animate-sponsers-row2' : 'animate-sponsers-row3')}>
                {[...rowImages, ...rowImages, ...rowImages].map((image, i) => (
                    <SponsorElement key={`${image.id}-${i}`} {...image} />
                ))}
            </div>
        </div>
    );
}


export default function Sponsers() {

    const row1_images = [
        { id: "abbott", src: "/Images/sponsers/abbottlogo.png", url: "https://www.youtube.com/", alt: "frog" },
        { id: "nike", src: "/Images/sponsers/nikelogo.png", url: "https://www.innersloth.com/games/among-us/", alt: "ucdavis congrats" },
        { id: "abbott1", src: "/Images/sponsers/abbottlogo.png", url: "https://www.innersloth.com/games/among-us/", alt: "frog" },
    ];

    const row2_images = [
        { id: "abbott", src: "/Images/sponsers/abbottlogo.png", url: "https://www.youtube.com/", alt: "frog" },
        { id: "nike", src: "/Images/sponsers/nikelogo.png", url: "https://www.innersloth.com/games/among-us/", alt: "ucdavis congrats" },
        { id: "abbott1", src: "/Images/sponsers/abbottlogo.png", url: "https://www.innersloth.com/games/among-us/", alt: "frog" },
        { id: "nike2", src: "/Images/sponsers/nikelogo.png", url: "https://www.youtube.com/", alt: "ucdavis congrats" },
        { id: "nike3", src: "/Images/sponsers/nikelogo.png", url: "https://www.youtube.com/", alt: "ucdavis congrats" },
    ];

    const row3_images = [
        { id: "abbott", src: "/Images/sponsers/abbottlogo.png", url: "https://www.youtube.com/", alt: "frog" },
        { id: "nike", src: "/Images/sponsers/nikelogo.png", url: "https://www.innersloth.com/games/among-us/", alt: "ucdavis congrats" },
        { id: "abbott1", src: "/Images/sponsers/abbottlogo.png", url: "https://www.innersloth.com/games/among-us/", alt: "frog" },
        { id: "nike2", src: "/Images/sponsers/nikelogo.png", url: "https://www.youtube.com/", alt: "ucdavis congrats" },
        { id: "nike3", src: "/Images/sponsers/nikelogo.png", url: "https://www.youtube.com/", alt: "ucdavis congrats" },
    ];

    return (
        <div className="relative bg-background-dark-purple">
            <div className="bg-transparent md:bg-[#3F1959] py-[2vw] gap-[2vw] flex flex-col">
                <SponserRow rowImages={row1_images} rowNum={1} />
                <SponserRow rowImages={row2_images} rowNum={2} />
                <SponserRow rowImages={row3_images} rowNum={3} />
            </div>

            <div className="hidden md:flex pointer-events-none absolute inset-y-0 left-0 w-[100vw] h-[95vw] translate-y-[-5vw] translate-x-[-1vw] z-10">
                <Image
                    src="/Images/sponsers/leftcloud.png"
                    alt="Purple cloud wrapping around the left side of the sponsors"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>

            {/* Right cloud */}
            <div className="hidden md:flex pointer-events-none absolute inset-y-0 right-0 w-[100vw] h-[95vw] translate-y-[-20.9vw] z-10">
                <Image
                    src="/Images/sponsers/rightcloud.png"
                    alt="Purple cloud wrapping around the right side of the sponsors"
                    fill
                    className="object-contain object-right"
                />
            </div>
        </div>

    );
}
