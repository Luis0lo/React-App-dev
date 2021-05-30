import React, { useContext } from 'react';
import { ListContext } from '../../contexts/ListContext';

const ProjectDetails = ({ project }) => {
  const { dispatch } = useContext(ListContext);

  return (
    <li
      onClick={() =>
        dispatch({
          type: 'REMOVE_PROJECT',
          id: project.id,
        })
      }
      classNmae="title"
    >
      <div className="title">{project.title}</div>
      <div className="description">{project.description}</div>
    </li>
  );
};

export default ProjectDetails;
