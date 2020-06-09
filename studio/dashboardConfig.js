export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5edf1cc67ea72b14941dabcc',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-pyn5u41u',
                  apiId: '2286e287-caaf-478a-b1b1-2b5bda7521a9'
                },
                {
                  buildHookId: '5edf1cc6fb4186f94b54f6ef',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-j3pq823j',
                  apiId: '6753e59b-8214-420b-acdd-316262c327f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mihkellind/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-j3pq823j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
