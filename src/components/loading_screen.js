import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { CircularProgress, alpha, styled } from '@mui/material';
import { Box } from '@mui/material';
//
// import Logo from './Logo';
import ProgressBar from './progressbar';



// ----------------------------------------------------------------------

  export default function LoadingScreen({ isDashboard, ...other }) {
    return (
      <>
        <ProgressBar />
  
        {!isDashboard && (
            <>
            <m.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeatDelay: 1,
                repeat: Infinity,
              }}
            >
                hii
              {/* <Logo disabledLink sx={{ width: 64, height: 64 }} /> */}
            </m.div>
  
            <Box
              component={m.div}
              animate={{
                scale: [1.2, 1, 1, 1.2, 1.2],
                rotate: [270, 0, 0, 270, 270],
                opacity: [0.25, 1, 1, 1, 0.25],
                borderRadius: ['25%', '25%', '50%', '50%', '25%'],
              }}
              transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
              sx={{
                width: 100,
                height: 100,
                borderRadius: '25%',
                position: 'absolute',
                border: (theme) => `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
              }}
            />
                <CircularProgress />
            <Box
              component={m.div}
              animate={{
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 270, 270, 0, 0],
                opacity: [1, 0.25, 0.25, 0.25, 1],
                borderRadius: ['25%', '25%', '50%', '50%', '25%'],
              }}
              transition={{
                ease: 'linear',
                duration: 3.2,
                repeat: Infinity,
              }}
              sx={{
                width: 120,
                height: 120,
                borderRadius: '25%',
                position: 'absolute',
                border: (theme) => `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
              }}
            />
            </>
        )}
      </>
    );
  }
  