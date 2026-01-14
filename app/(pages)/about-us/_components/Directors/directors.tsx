// import { useState } from 'react';
// const [activeCategory, setActiveCategory] = useState('Technical');

{/* // filter button styling */}
const filterStyle = "px-5 py-2 rounded-full bg-[var(--text-dark)] text-white uppercase cursor-pointer hover:bg-[var(--card-light-blue)]";

export default function Directors() {
  return (
    <div className="px-[10%]">
      <div className="border-2 border-red-500">
        <h1 className="text-[var(--text-dark)] font-bold"> Get to know our team</h1>
        <p>HackDavis is built by students, for students.</p>
      </div>
      
      <div className="py-[1%] border-2 border-green-500 flex flex-row gap-4 overflow-x-auto">
        <div className={filterStyle}>Technical</div>
        <div className={filterStyle}>External</div>
        <div className={filterStyle}>Operations</div>
        <div className={filterStyle}>Sponsorship</div>
        <div className={filterStyle}>Finance</div>
        <div className={filterStyle}>Marketing</div>
        <div className={filterStyle} >Design</div>
      </div>
    </div>
  );
}
