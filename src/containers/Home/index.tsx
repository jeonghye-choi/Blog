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
      right: '2021.6 - 2022.11',
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
        <p className="en">
          I started as a non-professional student, but to understand development
          more deeply, I tried double majored in computer science department.
          And now as A major student, I'm stacking a solid computer expertise
          up. I'm A front-end developer who collaborates with people and creates
          a growing through participation in projects and hackathons
          periodically. And Now, I'm working as a UX Engineer Assistant at Toss.
        </p>
        <p className="kr">
          비전공생으로 시작했지만 개발을 더 깊게 이해하고자 정보컴퓨터공학과
          복수전공에 도전했고, 지금은 전공생으로써 탄탄히 컴퓨터 전문 지식을
          쌓아가고 있습니다. 주기적으로 프로젝트나 해커톤에 참여하면서 다양한
          사람들과 협업하며 성장하는 프런트 개발자입니다. 현재 토스에서 UX
          Engineer Assistant로 일하고 있습니다.
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
