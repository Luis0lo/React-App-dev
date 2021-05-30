import React, { useContext, useState } from 'react';
import { ListContext } from '../../contexts/ListContext';

const NewProjectForm = () => {
  const { dispatch } = useContext(ListContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_PROJECT',
      project: {
        title,
        description,
      },
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autofocus="autofocus"
        required
      />
      <textarea
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows="4"
      ></textarea>
      <input type="submit" value="Add project" />
    </form>
  );
};

export default NewProjectForm;
