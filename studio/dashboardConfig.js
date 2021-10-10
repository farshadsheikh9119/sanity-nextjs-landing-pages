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
                  buildHookId: '61631b62a31520a2b02a463c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bf5n6qhi',
                  apiId: 'da37c0f8-c98d-4c2b-8cf8-c826b1cece85'
                },
                {
                  buildHookId: '61631b62a315209fbb2a4870',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-64ynwfhd',
                  apiId: '85014674-54d8-4d77-a7e7-ef608430d39a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/farshadsheikh9119/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-64ynwfhd.netlify.app', category: 'apps'}
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
