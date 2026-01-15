function Pictures() {
    return (
        <div className={`z-[${order}] top-0 left-1/2 p-3 pb-[60px] ${order === 1 ? "bg-[#DCE3EA]" : "bg-[#BDC7D0]"}`}>
            <img src={path} alt={alt} />
        </div>
    );
}

export default function CelebratePast() {
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