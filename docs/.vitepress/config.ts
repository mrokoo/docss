import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mrokooの知识库",
  description: "mrokoo note ",
  themeConfig: {
    nav: [
      { text: '文档', link: '/doc/' },
      { text: '笔记', link: '/rnote/' },
    ],
    sidebar: {
      '/doc/': [
        {
          text: '文档',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "文档清单",
              link: '/doc/'
            },
            {
              text: 'seseImage',
              link: '/doc/obsidian-SeSeImage'
            },
            {
              text: 'xgplayer',
              link: '/doc/xgplayer'
            }

          ]
        }
      ],
      '/rnote/': [
        {
          text: '笔记',
          collapsible: true,
          items: [
            {
              text: 'Unix',
              link: '/Unix/'
            },
            {
              text: 'How to read',
              link: '/How-to-read/'
            }
          ]
        }
      ],

      '/Unix/': [
        {
          text: "Unix程序设计",
          items: [
            {
              text: '目录',
              link: '//Unix/'
            },
            {
              text: '数据缓冲区',
              link: '/Unix/数据缓冲区'
            },
            {
              text: '文件内部表示',
              link: '/Unix/文件的内部表示'
            },
          ]
        }
      ],

      '/How-to-read/': [
        {
          text: '如何阅读',
          items: [
            {
              text: '目录',
              link: '/How-to-read/'
            },
            {
              text: '第一章 阅读的过程',
              link: '/How-to-read/readlist'
            }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
  },
  base: '/note/'
})

// [
//   {
//     text: '文档',
//     collapsible: true,
//     collapsed: true,
//     items: [
//       { text: 'obsidian-SeSeImage', link: '/seseimage' },
//     ]
//   },
//   {
//     text: '笔记',
//     collapsible: true,
//     collapsed: true,
//     items: [
//       {
//         text: 'Unix',
//         items: [
//           {
//             text: "高速缓冲",
//             link: '/rnote/Unix/数据缓冲区（高速缓冲）'
//           },
//           {
//             text: "文件内部表示",
//             link: '/rnote/Unix/文件的内部表示'
//           }
//         ]
//       },
//     ]
//   }
// ],