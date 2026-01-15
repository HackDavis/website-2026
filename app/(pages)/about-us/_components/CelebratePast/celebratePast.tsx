function Pictures() {
    return (
        <div>
            <p>PICUTRES</p>
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