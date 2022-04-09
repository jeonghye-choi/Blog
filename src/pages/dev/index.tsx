import Layout from 'components/Layout';
import * as React from 'react';
import 'styles/page.scss';

function DevPage() {
  return (
    <Layout page="Dev">
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
          <section className="subcategory">
            <li className="all clicked">All</li>
            <li className="clicked">JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
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
// export const query = graphql`
//   query {
//     allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//       group(field: frontmatter___category) {
//         fieldValue
//         group(field: frontmatter___tags) {
//           fieldValue
//           nodes {
//             frontmatter {
//               date(formatString: "YYYY.MM.DD")
//               tags
//               title
//               main_image {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//             id
//             slug
//             excerpt(truncate: true, pruneLength: 30)
//           }
//         }
//       }
//     }
//   }
// `;

export default DevPage;
