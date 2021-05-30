import React, { useContext } from 'react';
import { ListContext } from '../../contexts/ListContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ProjectDetails from './ProjectDetails';
import ThemeToggle from '../ThemeToggle';

const ProjectsList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { projects } = useContext(ListContext);

  return projects.length ? (
    <div
      style={{ background: theme.bg, color: theme.syntax }}
      className="projects-list"
    >
      <ThemeToggle />
      <div className="list-header">
        <h1> My Projects </h1>
        <p>Keep going, you only have {projects.length} projects to finish</p>
      </div>

      <div>
        <ul>
          {projects.map((project) => {
            return <ProjectDetails project={project} key={project.id} />;
          })}
        </ul>
      </div>
    </div>
  ) : (
    <div
      style={{ background: theme.bg, color: theme.syntax }}
      className="empty projects-list"
    >
      <h1> No Projects </h1>
      <p>Do you need some inspiration?</p>
    </div>
  );
};

export default ProjectsList;

// const ProjectsList = () => {
//   const { isLightTheme, light, dark } = useContext(ThemeContext);
//   const theme = isLightTheme ? light : dark;

//   const { projects } = useContext(ListContext);

//   return (
//     <div
//       style={{ background: theme.bg, color: theme.syntax }}
//       className="Projects-list"
//     >
//       <ThemeToggle />
//       <div className="list-header">
//         <h1> My projects </h1>
//         <p>Keep going, you only have {projects.length} projects to finish</p>
//       </div>
//       <ul>
//         return projects.lenght ? (
//         <div className="project-list">
//           <ul>
//             {projects.map((project) => {
//               return <ProjectDetails project={project} key={project.id} />;
//             })}
//           </ul>
//         </div>
//         ):(<div className="empty">No project to work on. Start right now</div>)
//         {/* {projects.map((project) => {
//           return (
//             <li key={project.id} style={{ background: theme.ui }}>
//               {project.title}
//             </li>
//           );
//         })} */}
//       </ul>
//     </div>
//   );
// };

// export default ProjectsList;

//import React, { Component } from 'react';

// class ProjectsList extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;

//               return (
//                 <div
//                   style={{ background: theme.bg, color: theme.syntax }}
//                   className="Projects-list"
//                 >
//                   {/* <div onClick={toggleAuth}>
//                     {isAuthenticated ? 'Logged in' : 'Logged out'}
//                   </div> */}
//                   <ThemeToggle />
//                   <ul>
//                     <li>Next Projects</li>
//                   </ul>
//                   <ul>
//                     <li style={{ background: theme.ui }}>My Portfolio</li>
//                     <li style={{ background: theme.ui }}>React App</li>
//                     <li style={{ background: theme.ui }}>Copycat web</li>
//                   </ul>
//                 </div>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

//export default ProjectsList;
