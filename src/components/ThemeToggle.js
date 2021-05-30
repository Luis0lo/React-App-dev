import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from './Button';

const ThemeToggle = () => {
  const { passToggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button className="btn--theme" onClick={passToggleTheme}>
        Focus Theme
      </button>
    </div>
  );
};

export default ThemeToggle;

// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
// import { Button } from './Button';

// export default ThemeToggle;

// class ThemeToggle extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => {
//           const { passToggleTheme } = context;
//           return (
//             <div>
//               <button className="btn--theme" onClick={passToggleTheme}>
//                 Toogle Theme
//               </button>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

// export default ThemeToggle;
