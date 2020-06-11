module.exports = [
    {
        id: 'post',
        dirname: '_posts',
        path: '/',
    },
    {
        id: 'biochemistry', // Unique id for current classifier
        dirname: '_biochemistry', // Matched directory name
        path: '/biochemistry/', // Entry page for current classifier
        title: 'প্রাণরসায়ন', // Entry and pagination page titles for current classifier.
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter: { //Front matter for entry page.
            tag: 'biochemistry'
        },
        itemLayout: 'biochemistry', // Layout for matched pages.
        itemPermalink: '/biochemistry/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
            lengthPerPage: 5,
        },
    },
    {
        id: 'metabolism', // Unique id for current classifier
        dirname: '_metabolism', // Matched directory name
        path: '/metabolism/', // Entry page for current classifier
        title: 'বিপাক', // Entry and pagination page titles for current classifier.
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter: { //Front matter for entry page.
            tag: 'vuepress'
        },
        itemLayout: 'metabolism', // Layout for matched pages.
        itemPermalink: '/metabolism/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
            lengthPerPage: 5,
        },
    },
     {
        id: 'nutrition', // Unique id for current classifier
        dirname: '_nutrition', // Matched directory name
        path: '/nutrition/', // Entry page for current classifier
        title: 'পুষ্টি বিজ্ঞান', // Entry and pagination page titles for current classifier.
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter: { //Front matter for entry page.
            tag: 'vuepress'
        },
        itemLayout: 'nutrition', // Layout for matched pages.
        itemPermalink: '/nutrition/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
            lengthPerPage: 5,
        },
    },
    {
        id: 'therapeutic', // Unique id for current classifier
        dirname: '_therapeutic', // Matched directory name
        path: '/therapeutic/', // Entry page for current classifier
        title: 'থেরাপিউটিক নিউট্রিশন', // Entry and pagination page titles for current classifier.
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter: { //Front matter for entry page.
            tag: 'vuepress'
        },
        itemLayout: 'therapeutic', // Layout for matched pages.
        itemPermalink: '/therapeutic/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
            lengthPerPage: 5,
        },
    }
]