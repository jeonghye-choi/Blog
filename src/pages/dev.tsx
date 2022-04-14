import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Dev from 'containers/Dev';
import * as React from 'react';
import 'styles/page.scss';

function DevPage() {
  return (
    <Layout page="Dev">
      <Seo
        title="정혜의 개발 저장소 | Dev"
        description="배우고 이해한 것들을 정리하는 저장소입니다."
      />
      <Dev />
    </Layout>
  );
}

export default DevPage;
