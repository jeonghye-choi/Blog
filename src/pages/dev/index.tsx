import CategoryLower from 'components/CategoryLower';
import ContentsListElement from 'components/ContentsListElement';
import Layout from 'components/Layout';
import React from 'react';
import dummyImg2 from 'static/image/dummyImg2.jpg';
import 'styles/dev.scss';

function DevPage() {
  const categoryList: string[] = [
    'React',
    'Vue',
    'React',
    'Vue',
    'React',
    'Vue',
    'React',
    'Vue',
    'React',
    'Vue',
  ];

  return (
    <Layout>
      <div className="dev-page">
        <section className="title-wrap">
          <span className="title">Dev</span>
          <div className="category-upper underline">web</div>
          <div className="category-upper">language</div>
        </section>
        <CategoryLower categoryList={categoryList} />

        <section className="contents-list">
          <ContentsListElement
            tags="React"
            title="타이틀이 들어갈 자리다"
            contents="컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지
            않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?"
            date="2022.1.3"
            img={dummyImg2}
          />
          <ContentsListElement
            tags="React"
            title="타이틀이 들어갈 자리다"
            contents="컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지
            않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?"
            date="2022.1.3"
            img={dummyImg2}
          />
          <ContentsListElement
            tags="React"
            title="타이틀이 들어갈 자리다"
            contents="컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지
          않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?"
            date="2022.1.3"
            img={dummyImg2}
          />
          <ContentsListElement
            tags="React"
            title="타이틀이 들어갈 자리다"
            contents="컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지
        않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?"
            date="2022.1.3"
            img={dummyImg2}
          />
          <ContentsListElement
            tags="React"
            title="타이틀이 들어갈 자리다"
            contents="컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지
      않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?"
            date="2022.1.3"
            img={dummyImg2}
          />
          <ContentsListElement
            tags="React"
            title="타이틀이 들어갈 자리다"
            contents="컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지
    않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?"
            date="2022.1.3"
            img={dummyImg2}
          />
          <ContentsListElement
            tags="React"
            title="타이틀이 들어갈 자리다"
            contents="컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지
  않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?"
            date="2022.1.3"
            img={dummyImg2}
          />
          <ContentsListElement
            tags="React"
            title="타이틀이 들어갈 자리다"
            contents="컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지
            않을까?컨텐츠가 들어가지 않을까?컨텐츠가 들어가지 않을까?"
            date="2022.1.3"
            img={dummyImg2}
          />
        </section>
      </div>
    </Layout>
  );
}

export default DevPage;
