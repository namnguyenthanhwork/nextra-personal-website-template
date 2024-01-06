export default {
  index: {
    type: 'page',
    title: 'Nextra',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Docs',
  },
  blog: {
    title: 'Blog',
    type: 'page',
    href: '/blog',
  },
  about: {
    type: 'page',
    title: 'About me',
    theme: {
      typesetting: 'article',
    },
  },
};
