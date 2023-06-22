/* import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
 */
import * as RiIcons from 'react-icons/ri';
import React from 'react';

export const SidebarData = [
  {
    title: 'Menu',
    path: '/menu',
    icon: <RiIcons.RiHomeLine />,
    cName: 'nav-text',
  },
  {
    title: 'Teams',
    path: '/teams',
    icon: <RiIcons.RiTeamLine />,
    cName: 'nav-text',
  },
  {
    title: 'Players',
    path: '/players',
    icon: <RiIcons.RiAccountCircleLine />,
    cName: 'nav-text',
  },
  {
    title: 'Games',
    path: '/games',
    icon: <RiIcons.RiBasketballLine />,
    cName: 'nav-text',
  },
  {
    title: 'States',
    path: '/states',
    icon: <RiIcons.RiNumbersLine />,
    cName: 'nav-text',
  },
];

/* ICON
team>>RiTeamLine
player>>RiAccountCircleLine
game>>RiBasketballLine
state>>RiNumbersLine
*/
