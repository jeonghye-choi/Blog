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
    </article>
  );
}

export default Home;
