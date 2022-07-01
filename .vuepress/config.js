module.exports = {
  title: "zack的学习笔记",
  description: '记录我学习成长的地方。.',


  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // { text: 'Docs', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'vuepress-reco', link: '/docs/theme-reco/' }
      //   ]
      // },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/skii22', icon: 'reco-github' },
          { text: 'Steam', link: 'https://steamcommunity.com/profiles/76561198803959356/' },
          { text: '网易云', link: 'https://music.163.com/#/user/home?id=380486672' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com'
      // },
      {
        title: '百度',
        desc: '众人寻你千百度',
        // avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        desc: 'Enjoy when you can, and endure when you must.',
        link: 'https://www.baidu.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        // avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '2022/6/30 11:41',
    // 作者
    author: 'zack',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2022',
    /**
     * 密钥 (if your blog is private)
     */

    keyPage: {
      keys: ['kfa300'],
      color: '#42b983',
      lineColor: '#42b983'
    }

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: '8EDCyMkOCXNEL90An5HIaxv5-gzGzoHsz',// your appId
      appKey: 'UhR4wUMy6MhQnmoSdzxDjxIy', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  }
}  
