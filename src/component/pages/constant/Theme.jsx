// // themes.js
// import { createMuiTheme } from '@mui/material/styles';

import { createMuiTheme, createTheme } from "@mui/material/styles";

// export const lightTheme = createMuiTheme({
//   palette: {
//     type: 'light',
//   },
// });

// export const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });


// themes.js

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000', // Change primary text color
    },
    secondary: {
      main: '#000', // Change secondary text color
    },
    // Add more customizations as needed
  },
  // Add more customizations as needed
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fff', // Change primary text color
    },
    secondary: {
      main: '#fff', // Change secondary text color
    },
    // Add more customizations as needed
  },
  // Add more customizations as needed
});
