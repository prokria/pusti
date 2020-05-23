module.exports = {
  title: 'পুষ্টি প্রক্রিয়া',
  description: 'খাদ্য ও  পুষ্টি বিজ্ঞান',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'facebook',
          link: 'https://www.facebook.com/nutrition.ayesha',
        }
      ],
      copyright: [
        {
          text: 'Copyright © 2020-present ProKria',
          link: 'https://prokria.com',
        },
      ],
    },
  },
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" }],
    ['link', { rel: "stylesheet", href: "https://fonts.maateen.me/adorsho-lipi/font.css" }]
  ]
}
