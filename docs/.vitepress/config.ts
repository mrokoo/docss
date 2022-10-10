import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mrokooの知识库",
  description: "mrokoo note ",
  themeConfig: {
    nav: [
      { text: '文档', link: '/doc' },
      { text: '笔记', link: '/rnote' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/gettingStart' },
          {text: 'test', items: [{text: "df", link: "/test1/ddd"}]}
        ]
      }
    ],
  },
  base: '/note/'
})

