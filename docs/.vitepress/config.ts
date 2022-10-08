import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "测试标题",
  description: "这是一个测试",
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
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
  base: '/'
})

