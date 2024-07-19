/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//https://docusaurus.io/docs/sidebar
const sidebars = {
  landingSidebar: [
    {
      type: 'doc',
      label: 'Home',
      id: 'index'
    },
    {
      type: 'category',
      label: 'OpenDI Standards',
      items: [
        {
          type: 'link',
          label: 'Roles and User Stories',
          href: 'http://roles-user-stories.opendi.org'
        }
      ]
    },
  ],

};

export default sidebars;
