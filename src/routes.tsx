import { BsRocketTakeoffFill } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa6';
import { GiLoveMystery } from 'react-icons/gi';
import { GrMoney } from 'react-icons/gr';
import { IRoute } from 'types/navigation';

import { Icon } from '@chakra-ui/react';

const routes: IRoute[] = [
  {
    name: 'Xu Hướng',
    layout: '/admin',
    path: '/trending',
    icon: <Icon as={BsRocketTakeoffFill} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Công Nghệ',
    layout: '/admin',
    path: '/bitcoin',
    icon: (
      <Icon
        as={FaBitcoin}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'Kiếm Tiền Online',
    layout: '/admin',
    icon: <Icon as={GrMoney} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
  },
  {
    name: 'Thủ Thuật / Hack Game ',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={FaGamepad} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Trãi Đời ',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={GiLoveMystery} width="20px" height="20px" color="inherit" />,
  },

];

export default routes;
