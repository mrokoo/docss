import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mrokooの知识库",
  description: "mrokoo note ",
  themeConfig: {
    nav: [
      { text: '文档', link: '/doc' },
      { text: '笔记', link: '/rnote' },
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: 'obsidian-SeSeImage', link: '/seseimage' },
        ]
      },
      {
        text: '笔记',
        items: [
          { text: 'Unix', items: [
            {
              text: "高速缓冲",
              link: '/rnote/Unix/数据缓冲区（高速缓冲）'
            },
            {
              text: "文件内部表示",
              link: '/rnote/Unix/文件的内部表示'
            }
          ] },
        ]
      }
    ],
  },
  base: '/note/'
})

