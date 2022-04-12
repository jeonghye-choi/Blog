import Dev from 'containers/Dev';
import * as React from 'react';
import 'styles/page.scss';

function DevPage() {
  return <Dev />;
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
