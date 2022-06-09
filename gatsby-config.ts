import path from 'path';

module.exports = {
  siteMetadata: {
    title: 'Jeonghye Blog',
    author: 'Jeonghye Choi',
    description: 'This blog is powered by gatsby',
    siteUrl: 'https://jeonghye.blog',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-root-import',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto+Sans+KR:100,300,400,500,700,900`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `_posts`,
        path: path.resolve(`_posts`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: { sh: 'bash' },
              showLineNumbers: false,
              numberLines: true,
              noInlineHighlight: false,
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              showCaptions: ['title'],
              wrapperStyle: `
                margin-bottom: 50px;
                margin-top: 50px;
                box-shadow: #bbb 0px 0px 10px 1px;`,
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `jeonghye-blog`,
      },
    },

    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://jeonghye.blog',
        sitemap: 'https://jeonghye.blog/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://jeonghye.blog`,
        stripQueryString: true,
      },
    },
  ],
};
