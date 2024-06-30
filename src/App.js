// // App.js
// import React from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { Typography } from '@mui/material';
// import { ThemeContext, ThemeProvider } from './component/context/ThemeContext';
// import { lightTheme } from './component/pages/constant/Theme';

// const App = () => {
//   return (
//     <ThemeProvider>
//       <MuiThemeProvider theme={lightTheme}>
//         <div>
//           <Typography variant="h1">My App</Typography>
//           <ToggleThemeButton />
//         </div>
//       </MuiThemeProvider>
//     </ThemeProvider>
//   );
// };

// const ToggleThemeButton = () => {
//   const { theme, toggleTheme } = React.useContext(ThemeContext);

//   return (
//     <Button variant="contained" color="primary" onClick={toggleTheme}>
//       {theme === lightTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
//     </Button>
//   );
// };

// export default App;








import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import "./component/pages/login/login";
import Routing from "./component/routes/Routing";
import { GlobalContextApi } from "./component/context/GlobalContex";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "./component/context/ThemeContext";
import { lightTheme } from "./component/pages/constant/Theme";

function App() {
  return (
    <Fragment>
      <ThemeProvider>
        <MuiThemeProvider theme={lightTheme} >
      <GlobalContextApi>
      <Router>
        <Routing />
      </Router>
      </GlobalContextApi>
        </MuiThemeProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;



// App.js
// import React from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
// import { ThemeProvider } from './ThemeContext';
// import Button from '@mui/material/Button';
// import { Typography } from '@mui/material';
// import { lightTheme } from './themes';

// const App = () => {
//   return (
//     <ThemeProvider>
//       <MuiThemeProvider theme={lightTheme}>
//         <div>
//           <Typography variant="h1">My App</Typography>
//           <ToggleThemeButton />
//         </div>
//       </MuiThemeProvider>
//     </ThemeProvider>
//   );
// };

// const ToggleThemeButton = () => {
//   const { theme, toggleTheme } = React.useContext(ThemeContext);

//   return (
//     <Button variant="contained" color="primary" onClick={toggleTheme}>
//       {theme === lightTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
//     </Button>
//   );
// };

// export default App;
























































// import { Fragment } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// // import "./component/pages/login/login";
// import Routing from "./component/routes/Routing";
// import { GlobalContextApi } from "./component/context/GlobalContex";

// function App() {
//   return (
//     <Fragment>
//       <GlobalContextApi>
//       <Router>
//         <Routing />
//       </Router>
//       </GlobalContextApi>
//     </Fragment>
//   );
// }

// export default App;