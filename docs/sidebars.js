// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
    homeSidebar: [
      "about",
      {
        type: 'category',
        label: 'User Documentation',
        collapsed: false,
        link: {
          type: 'generated-index',
          description:
            'A Guide to Getting Acquainted with Millennium.',
          slug: '/users',
        },
        items: [
          'users/installing',
          'users/uninstalling',
          'users/getting-started',
          'users/trouble-shooting',
          'users/faq',
        ],
      },
      {
        type: 'category',
        label: 'Development',
        collapsed: true,
        link: {
          type: 'generated-index',
          description:
            "Let's learn about how to contribute to the Millennium community!",
          slug: '/developers',
        },
        items: [
          {
            type: 'category',
            label: 'Creating Themes',
            collapsed: true,
            link: {
              type: 'generated-index',
              description:
                "Creating themes for Millennium is a fun and rewarding experience. Let's get started!",
              slug: '/developers/themes',
            },
            items: [
              'developers/themes/getting-started',
              'developers/themes/making-themes',
              'developers/themes/dynamic-patching',
              'developers/themes/theme-colors',
              'developers/themes/tips-and-tricks',
              'developers/themes/publishing',
            ],
          },
          {
            type: 'category',
            label: 'Creating Plugins',
            collapsed: true,
            link: {
              type: 'generated-index',
              description:
                "Creating plugins for Millennium is a fun and rewarding experience. Let's get started!",
              slug: '/developers/plugins',
            },
            items: [
              'developers/plugins/learn',
              'developers/plugins/packages',
              {
                type: 'category',
                label: 'Python Reference',
                collapsed: true,
                link: {
                  type: 'generated-index',
                  description:
                    "Creating plugins for Millennium is a fun and rewarding experience. Let's get started!",
                  slug: '/developers/plugins/python',
                },
                items: [
                  'developers/plugins/python/ready',
                  'developers/plugins/python/steam-path',
                  'developers/plugins/python/call-method',
                  'developers/plugins/python/add-css',
                  'developers/plugins/python/add-js',
                  'developers/plugins/python/remove-module',
                  'developers/plugins/python/set-setting',
                  'developers/plugins/python/user-settings',
                  'developers/plugins/python/version'
                ],
              },
              {
                type: 'category',
                label: 'TypeScript Reference',
                collapsed: true,
                link: {
                  type: 'generated-index',
                  description:
                    "Creating plugins for Millennium is a fun and rewarding experience. Let's get started!",
                  slug: '/developers/plugins/typescript',
                },
                items: [
                  'developers/plugins/typescript/csm',
                  'developers/plugins/typescript/expose',
                  'developers/plugins/typescript/find',
                  'developers/plugins/typescript/self',
                  'developers/plugins/typescript/window-hook'
                ],
              }
            ],
          }
        ],
      }
    ]
};