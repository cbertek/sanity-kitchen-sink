export default {
  widgets: [
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
                  buildHookId: '5f76b41d2aab5987766ae5d0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3f6hcd2g',
                  apiId: '73b0cbe1-6a01-4157-bb82-2dcdfb26b223'
                },
                {
                  buildHookId: '5f76b41eeaddc996157ea15e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v1wrqgqa',
                  apiId: 'fdd9e43c-9a75-4066-bdec-8eb7ec53ccca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cbertek/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v1wrqgqa.netlify.app', category: 'apps'}
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
