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
        <div className="bg-red-100">
            <div className="justify-center"> 
                <div>TITLE</div>
                <div>WORDS</div>
            </div>
            {/** uhhh the pictures F1F3F8*/}
            <Pictures/>
            <button >View 2026 Winners</button>
        </div>
    );
}