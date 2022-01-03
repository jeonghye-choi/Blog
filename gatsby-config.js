module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Jeonghye Blog',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-root-import',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto+Sans+KR\:100,300,400,500,700,900`],
        display: 'swap',
      },
    },
  ],
};
