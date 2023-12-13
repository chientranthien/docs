import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c32'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'efe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1b6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2f8'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b8c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '991'),
    exact: true
  },
  {
    path: '/blog/id-generator',
    component: ComponentCreator('/blog/id-generator', 'a5b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '55e'),
    exact: true
  },
  {
    path: '/blog/tags/idgenerator',
    component: ComponentCreator('/blog/tags/idgenerator', '225'),
    exact: true
  },
  {
    path: '/blog/tags/sharding',
    component: ComponentCreator('/blog/tags/sharding', '804'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '794'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bf0'),
    routes: [
      {
        path: '/docs/category/change-log',
        component: ComponentCreator('/docs/category/change-log', '23d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/change-log-1',
        component: ComponentCreator('/docs/category/change-log-1', '3c2'),
        exact: true,
        sidebar: "goldenPay"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/golden_pay/architecture',
        component: ComponentCreator('/docs/golden_pay/architecture', 'e60'),
        exact: true,
        sidebar: "goldenPay"
      },
      {
        path: '/docs/golden_pay/changelog/dec_2023_init_project',
        component: ComponentCreator('/docs/golden_pay/changelog/dec_2023_init_project', '927'),
        exact: true,
        sidebar: "goldenPay"
      },
      {
        path: '/docs/golden_pay/feature',
        component: ComponentCreator('/docs/golden_pay/feature', 'f97'),
        exact: true,
        sidebar: "goldenPay"
      },
      {
        path: '/docs/golden_pay/intro',
        component: ComponentCreator('/docs/golden_pay/intro', '00e'),
        exact: true,
        sidebar: "goldenPay"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b0e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
