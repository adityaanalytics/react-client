import React from 'react';
import MetisMenu from './MetisMenu';

// Embeds styles
import '../less/standart.less';


const menu1 = [
  {
    id: 1,
    icon: 'dashboard',
    label: 'Menu 1',
    to: '#menu-1',
  },
  {
    id: 2,
    icon: 'bell',
    label: 'Menu 2',
    to: '#menu-2',
  },
  {
    id: 3,
    icon: 'bolt',
    label: 'Menu 3',
    content: [
      {
        id: 4,
        icon: 'bolt',
        label: 'Test',
        to: '#test',
      },
    ],
  },
  {
    id: 5,
    icon: 'bars',
    label: 'Menu 4',
    content: [
      {
        id: 6,
        icon: 'bold',
        label: 'Sub Menu 1',
        to: '#sub-menu-1',
      },
      {
        id: 7,
        icon: 'italic',
        label: 'Sub Menu 2',
        content: [
          {
            id: 8,
            icon: 'cog',
            label: 'Level 3 Menu 1',
            to: '#level-3-menu-1',
          },
          {
            id: 9,
            icon: 'group',
            label: 'Level 3 Menu 2',
            to: '#level-3-menu-2',
          },
        ],
      },
      {
        id: 10,
        icon: 'image',
        label: 'Sub Menu 3',
        content: [
          {
            id: 11,
            icon: 'cog',
            label: 'Level 3 Menu 3',
            to: '#level-3-menu-3',
          },
          {
            id: 12,
            icon: 'group',
            label: 'Level 3 Menu 4',
            to: '#level-3-menu-4',
          },
        ],
      },
      {
        id: 13,
        icon: 'check',
        label: 'Sub Menu 4',
        to: '#sub-menu-4',
      },
    ],
  },
  {
    id: 14,
    icon: 'external-link',
    label: 'External Link',
    externalLink: true,
    to: 'https://www.google.com',
  },
];

const menu2 = [
  {
    id: 1,
    icon: 'bolt',
    label: 'Menu 3',
  },
  {
    id: 2,
    parentId: 1,
    icon: 'bolt',
    label: 'Test',
    to: '#test',
  },
  {
    id: 3,
    icon: 'bars',
    label: 'Menu 4',
  },
  {
    id: 4,
    parentId: 3,
    icon: 'bold',
    label: 'Sub Menu 1',
    to: '#sub-menu-1',
  },
  {
    id: 5,
    parentId: 3,
    icon: 'image',
    label: 'Sub Menu 2',
  },
  {
    id: 6,
    parentId: 5,
    icon: 'cog',
    label: 'Level 3 Menu 1',
    to: '#level-3-menu-1',
  },
  {
    id: 7,
    parentId: 5,
    icon: 'group',
    label: 'Level 3 Menu 2',
    to: '#level-3-menu-2',
  },
];


class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: menu1,
    };
  }
  render() {
    return (
      <div>
        <MetisMenu
          ref={(r) => { this.menu = r; }}
          activeLinkFromLocation
          activeLinkLabel={this.state.activeLinkLabel}
          activeLinkId={this.state.activeLinkId}
          classNameItemHasVisibleChild="open"
          className="menu"
          onSelected={(e) => {
            /* e.preventDefault();
            console.log('onSelected', e);*/
          }}
          content={this.state.menu}
        />

        <div className="body">
           

        </div>
      </div>
    );
  }
}
export default Menu;