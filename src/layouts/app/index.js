import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
// hooks
// import useSettings from '../../hooks/useSettings';
import useResponsive from '../../hooks/use_responsive';
import useCollapseDrawer from '../../hooks/use_collapse';
// config
import { HEADER, NAVBAR } from '../../config';
//
// import DashboardHeader from './header';
import NavbarVertical from './navbar/navbar_vertical';
// import NavbarHorizontal from './navbar/NavbarHorizontal';

// ----------------------------------------------------------------------

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function AppLayout() {
  const { collapseClick, isCollapse } = useCollapseDrawer();

//   const { themeLayout } = useSettings();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

//   const verticalLayout = themeLayout === 'vertical';

  if (true) {
    return (
      <>
        {/* <DashboardHeader onOpenSidebar={() => setOpen(true)} verticalLayout={verticalLayout} /> */}

        <Stack  direction="row" alignItems="left" >
        <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

        <Box
          component="main"
          sx={{
            px: { lg: 2 },
            pt: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
            },
            pb: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`,
            },
          }}
        >
          <Outlet />
        </Box>
        </Stack>
      </>
    );
  }

  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >

      <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

      <MainStyle collapseClick={collapseClick}>
        <Outlet />
      </MainStyle>
    </Box>
  );
}
