import Layout from 'components/Layout';
import React from 'react';
import 'styles/index.scss';

function IndexPage() {
  return (
    <Layout>
      <div className="index-page">
        <div className="title-wrap">
          <div className="title">Hello, I&apos;m Jeonghye</div>
          <p>
            A front-end web developer studying at Pusan National University. I
            always try to draw growth and challenge for being a better today
            than yesterday.
          </p>
        </div>

        <div className="subtitle">
          <span className="highlight">Skills</span>
        </div>
        <article>
          <b>Languages</b>
          <p>TypeScript | JavaScript | C++ | Python</p>
          <b>Framework & Libraries</b>
          <p>React | Vue | Django | React-Native</p>
          <b>Tools</b>
          <p>Git | GitHub | GitLab | VSCode | Insomnia</p>
        </article>
        <div className="subtitle">
          <span className="highlight">Projects</span>
        </div>
        <article></article>
      </div>
    </Layout>
  );
}

export default IndexPage;
