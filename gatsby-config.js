require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    siteTitle: 'Ian Tan',
    author: 'Ian Tan',
    siteTitleAlt: 'Ian Tan',
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: 'Blog',
            slug: '/blog',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ian Tan - Software Engineer',
        short_name: 'Ian Tan',
        description:
          'A thought catalog of software engineering, product development, and computer science.',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#6B46C1',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
