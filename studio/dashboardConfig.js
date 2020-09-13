export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f5e0d2dc3e9a67b66667ac5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xbnjfxu3',
                  apiId: '75187580-11b0-47ee-999f-b7713b3fcdb9'
                },
                {
                  buildHookId: '5f5e0d2d5583443223e9ce00',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mofs9poi',
                  apiId: 'a0beb4ac-df86-4be2-a094-2637cb91deee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manrick653/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mofs9poi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
