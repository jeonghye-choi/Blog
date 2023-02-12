import ListRow from 'components/ListRow';
import ListTable from 'components/ListTable';
import { work, activities, project, awards, certification } from 'datas';
import { Link } from 'gatsby';
import * as React from 'react';

import './home.scss';

function Home() {
  return (
    <article id="home">
      <section className="home-introduction">
        <h2>Hi Guys, I&apos;m Jeonghye</h2>
        <p className="en">
          I started as a non-professional student, but to understand development
          more deeply, I tried double majored in computer science department.
          And now as A major student, I'm stacking a solid computer expertise
          up. I'm A front-end developer who collaborates with people and creates
          a growing through participation in projects and hackathons
          periodically.
        </p>
        <p className="kr">
          비전공생으로 시작했지만 개발을 더 깊게 이해하고자 부산대학교
          정보컴퓨터공학과 복수전공에 도전했고, 지금은 전공생으로써 탄탄히
          컴퓨터 전문 지식을 쌓아가고 있습니다. 주기적으로 프로젝트나 해커톤에
          참여하면서 다양한 사람들과 협업하며 성장하는 소프트웨어
          엔지니어입니다.
        </p>
      </section>

      <section className="home-section">
        <h3>I&apos;ve worked at</h3>
        <ListTable>
          {work.map(element => (
            <ListTable.Li key={element.title}>
              <span>{element.title}</span>
              <span>{element.role}</span>
              <span>{element.period}</span>
            </ListTable.Li>
          ))}
        </ListTable>
      </section>

      <section className="home-section">
        <h3>I won the award</h3>
        <ListTable>
          {awards.map(element => (
            <ListTable.Li key={element.title} column={4}>
              <span>{element.title}</span>
              <span>{element.from}</span>
              <span>{element.rank}</span>
              <span>{element.date}</span>
            </ListTable.Li>
          ))}
        </ListTable>
      </section>

      <section className="home-section">
        <h3>I&apos;ve gotten certifications</h3>
        <ListTable>
          {certification.map(element => (
            <ListTable.Li key={element.title} column={2}>
              <span>{element.title}</span>
              <span>{element.from}</span>
            </ListTable.Li>
          ))}
        </ListTable>
      </section>

      <section className="home-section">
        <h3>I&apos;ve done activities</h3>
        <ListRow title="Clubs">
          {activities.Club.map((element, index) => (
            <ListRow.Li key={index}>
              <span>{element.title}</span>
              <span>{element.period}</span>
            </ListRow.Li>
          ))}
        </ListRow>
        <ListRow title="Study">
          {activities.Study.map((element, index) => (
            <ListRow.Li key={index}>
              <span>{element.title}</span>
              <span>{element.period}</span>
            </ListRow.Li>
          ))}
        </ListRow>
        <ListRow title="Educations">
          {activities.Education.map((element, index) => (
            <ListRow.Li key={index}>
              <span>{element.title}</span>
              <span>{element.period}</span>
            </ListRow.Li>
          ))}
        </ListRow>
        <ListRow title="Presentations">
          {activities.Presentation.map((element, index) => (
            <ListRow.Li key={index}>
              <span>{element.title}</span>
              <span>{element.period}</span>
            </ListRow.Li>
          ))}
        </ListRow>
      </section>

      <section className="home-section">
        <h3>Project List</h3>
        <ListTable>
          {project.map(element => (
            <ListTable.Li key={element.title} column={4}>
              <span className="with-button">
                <Link to={element.link}>
                  <div> {element.title}</div>
                </Link>
              </span>
              <span>{element.role}</span>
              <span>{element.period}</span>
              <span className="with-button">
                <Link to={element.githubLink}>
                  <button>Github</button>
                </Link>
              </span>
            </ListTable.Li>
          ))}
        </ListTable>
      </section>
    </article>
  );
}

export default Home;
