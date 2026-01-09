// import { useState } from 'react';
// const [activeCategory, setActiveCategory] = useState('Technical');

export default function Directors() {
  return (
    <div>
      <div>
        <h1>Meet our Directors</h1>
        <h3>HackDavis is built by students, for students.</h3>
      </div>

      <div>
        <div>Technical</div>
        <div>External</div>
        <div>Operations</div>
        <div>Sponsorship</div>
        <div>Finance</div>
        <div>Marketing</div>
        <div>Design</div>
      </div>

      <div>
        {/* one profile */}
        <div>
          {/* <Image /> */}
          <h4>First last</h4>
          <p> Position, lead</p>
        </div>

        {/* 2nd profile */}
        <div>
          {/* <Image /> */}
          <h4>First last</h4>
          <p> Position, lead</p>
        </div>

        {/* 3rd profile */}
        <div>
          {/* <Image /> */}
          <h4>First last</h4>
          <p> Position, lead</p>
        </div>

        {/* 4th profile */}
        <div>
          {/* <Image /> */}
          <h4>First last</h4>
          <p> Position, lead</p>
        </div>
      </div>
    </div>
  );
}
