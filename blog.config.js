// @ts-check

/** @type {import('@types').BlogConfigType} */
const blogConfig = {
  baseurl: 'http://example.com/',
  title: '새로운 블로그',
  subtitle: 'next.js와 stitches, lunr 검색 엔진으로 만드는 블로그',
  locale: {
    languageCode: 'ko-KR',
  },
  avatar: {
    enabled: true,
    src: 'img/avatar.jpg',
  },
  social: [
    {identifier: 'github', name: 'yunu7067', url: 'https://github.com/yunu7067'},
    {identifier: 'instagram', name: 'yunu_2022', url: 'https://www.instagram.com/yunu_2022/'},
  ],
  theme: 'auto',
  post: {
    math: true,
    mermaid: true,
    readingTime: false,
    toc: true,
    license: {
      enable: false,
      default: '',
    },
  },
  comments: {
    enabled: true,
    provider: 'giscus',
    giscus: {
      repo: 'yunu7067/yunu7067.github.io',
      repoId: 'MDEwOlJlcG9zaXRvcnkzNTMzNjU1MjQ=',
      category: 'giscus',
      categoryId: 'DIC_kwDOFQ_uFM4CADJ2',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      lightTheme: 'light',
      darkTheme: 'dark',
    },
  },
};

module.exports = blogConfig;
