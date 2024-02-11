// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_APP = '/weatherapp';

// ----------------------------------------------------------------------


export const PATH_APP = {
    root: ROOTS_APP,
    general: {
      app: path(ROOTS_APP, '/app'),
      mainmap: path(ROOTS_APP, '/mainmap'),
      details: path(ROOTS_APP, '/details'),
    },
};