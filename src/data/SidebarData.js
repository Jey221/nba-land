import * as RiIcons from 'react-icons/ri';

// données du menu Side Bar pour la navigation au Header
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
    title: 'Ranking',
    path: '/ranking',
    icon: <RiIcons.RiNumbersLine />,
    cName: 'nav-text',
  },
];
