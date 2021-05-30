import React from 'react';
import ProjectsList from '../project/ProjectsList';
import '../../App.css';
import '../project/ProjectsList.css';
import NewProjectForm from '../project/ProjectForm';
import ThemeContextProvider from '../../contexts/ThemeContext';
import ListContextProvider from '../../contexts/ListContext';

export default function Projects() {
  return (
    <div>
      <ThemeContextProvider>
        <ListContextProvider>
          {/* <h1 className="services">SERVICES</h1> */}
          <ProjectsList />
          <NewProjectForm />
        </ListContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
