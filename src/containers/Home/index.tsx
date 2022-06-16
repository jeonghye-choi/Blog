import * as React from 'react';

import './home.scss';

function Home() {
  return (
    <article id="home">
      <section className="home-introduction">
        <h2>Hi Guys, I&apos;m jeonghye</h2>
        <p className="en">I’m a Web Frontend Developer.</p>
        <p className="kr">
          성장을 위해 도전하고, 성공을 위해 시스템을 만드는 프런트 개발자,
          최정혜입니다.
        </p>
      </section>
      <section className="home-work">
        <h3>I&apos;ve worked at</h3>
        <ul>
          <li>
            <span className="left">Viva Republica (Toss)</span>
            <span className="center">UX Engineer (Assistant)</span>
            <span className="right">2022.6.27 - Present</span>
          </li>
          <li>
            <span className="left">HoneyBees</span>
            <span className="center">FE Developer</span>
            <span className="right">2021.6 - Present</span>
          </li>
          <li>
            <span className="left">ASSI (Readers)</span>
            <span className="center">FE Intern</span>
            <span className="right">2020.10</span>
          </li>
          <li>
            <span className="left">While True (OnAd)</span>
            <span className="center">UI/UX Designer</span>
            <span className="right">2019.5.3 - 2019.9.13</span>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Home;
