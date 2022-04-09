import Layout from 'components/Layout';
import * as React from 'react';
import 'styles/page.scss';

function LogPage() {
  return (
    <Layout page="Log">
      <div className="page">
        <article className="categories">
          <section className="category">
            <li className="clicked">Frontend</li>
            <li>Backend</li>
            <li>CS</li>
            <li>Git/Github</li>
            <li>Activity</li>
            <li>Project</li>
          </section>
        </article>
        <article className="contents">
          <div className="content">
            <img src="" />
            <div className="title">title이 들어갈 자리</div>
            <div className="date">2022.04.08</div>
          </div>
          <div className="content">
            <img src="" />
            <div className="title">title</div>
            <div className="date">2022.04.08</div>
          </div>
          <div className="content">
            <img src="" />
            <div className="title">title</div>
            <div className="date">2022.04.08</div>
          </div>
          <div className="content">
            <img src="" />
            <div className="title">title</div>
            <div className="date">2022.04.08</div>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export default LogPage;
