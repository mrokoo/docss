import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mrokooの知识库",
  description: "mrokoo note ",
  themeConfig: {
    nav: [
      { text: '文档', link: '/doc' },
      { text: '笔记', link: '/rnote' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: 'obsidian-SeSeImage', link: '/seseimage' },
          { text: 'Getting Started', link: '/gettingStart' },
        ]
      },
      {
        text: '笔记',
        items: [
          { text: 'Unix', items: [
            {
              text: "高速缓冲",
              link: '/Unix/数据缓冲区（高速缓冲）'
            }
          ] },
          { text: 'Getting Started', link: '/gettingStart' },
        ]
      }
    ],
  },
  base: '/note/'
})

