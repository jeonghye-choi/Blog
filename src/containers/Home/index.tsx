import ListTable from 'components/ListTable';
import * as React from 'react';

import './home.scss';

function Home() {
  const work = [
    {
      left: 'Viva Republica (Toss)',
      center: 'UX Engineer (Assistant)',
      right: '2022.6.27 - Present',
    },
    {
      left: 'HoneyBees',
      center: 'FE Developer',
      right: '2021.6 - Present',
    },
    {
      left: 'ASSI (Readers)',
      center: 'FE Intern',
      right: '2020.10',
    },
    {
      left: 'While True (OnAd)',
      center: 'UI/UX Designer',
      right: '2019.5.3 - 2019.9.13',
    },
  ];

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
        <ListTable data={work} />
      </section>
    </article>
  );
}

export default Home;
