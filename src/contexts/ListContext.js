import React, { createContext, useReducer, useEffect } from 'react';
import uuid from 'uuid/v1';
import { projectReducer } from '../reducers/projectReducer';

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [projects, dispatch] = useReducer(projectReducer, [], () => {
    const localData = localStorage.getItem('projects');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);
  return (
    <ListContext.Provider value={{ projects, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;

//To use the code below delete the projectReducer file
// import React, { createContext, useState } from 'react';
// import uuid from 'uuid/v1';

// export const ListContext = createContext();

// const ListContextProvider = (props) => {
//   const [projects, setProjects] = useState([
//     {
//       title: 'Portfolio',
//       description: 'Add at least 1 project to my portofolio this month',
//       id: 1,
//     },
//     {
//       title: 'Copycat web',
//       description: 'Clone a website using pure css',
//       id: 2,
//     },
//     {
//       title: 'Tetris',
//       description: 'Build Tetris using vanila Javascript',
//       id: 3,
//     },
//   ]);

//   const addProject = (title, description) => {
//     setProjects([
//       ...projects,
//       { title: title, description: description, id: uuid() },
//     ]);
//   };

//   const removeProject = (id) => {
//     setProjects(projects.filter((project) => project.id !== id));
//   };

//   return (
//     <ListContext.Provider value={{ projects, addProject, removeProject }}>
//       {props.children}
//     </ListContext.Provider>
//   );
// };

// export default ListContextProvider;
