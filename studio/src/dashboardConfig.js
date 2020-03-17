export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7124808a6372017444dc11',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-uhzqw42r',
                  apiId: 'de00c881-214a-4a41-9657-ff6f12724ebe'
                },
                {
                  buildHookId: '5e712481a5427f2e2101b7d6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dzqe29bk',
                  apiId: 'b81de2e8-2667-42e2-adb0-a5596e814fab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devrchancay/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dzqe29bk.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
