function Pictures() {
    return (
        <div className={`z-[${order}] top-0 left-1/2 p-3 pb-[60px] ${order === 1 ? "bg-[#DCE3EA]" : "bg-[#BDC7D0]"}`}>
            <img src={path} alt={alt} />
        </div>
    );
}

export default function CelebratePast() {
    const [images, setImages] = useState([
        { path: "/placeholder.jpg", alt: "among us", order: 1 },
        { path: "/anotherplaceholder.png", alt: "among us!!!", order: 2 },
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

        return () => clearInterval(interval);
    }, []);
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
                {images
                    .sort((a, b) => a.order - b.order)
                    .map((image) => (
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