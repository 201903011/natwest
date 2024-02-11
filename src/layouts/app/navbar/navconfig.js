// routes
import SvgIconStyle from '../../../components/svg_icon';
import { PATH_APP } from '../../../routes/path';

// import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;


const ICONS = {
  app: getIcon('ic_stud'),
  mainmap: getIcon('ic_user'),
  details: getIcon  ('ic_watchlist'),
};

const navConfig = [ 
  {
    subheader: 'weather',
    items: [
      
      // APP
      {
        title: 'app',
        path: PATH_APP.general.app,
        icon: ICONS.app,
      },

      // MAINMAP
      {
        title: 'minmap',
        path: PATH_APP.general.mainmap,
        icon: ICONS.mainmap,
      },

      // DETAILS
      {
        title: 'details',
        path: PATH_APP.general.details,
        icon: ICONS.details,
      },
    ],
  },

  
];

export default navConfig;
