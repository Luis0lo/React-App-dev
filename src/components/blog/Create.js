import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BlogCSS from './Blog.module.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Luis');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push('/blog');
    });
  };

  return (
    <div className={BlogCSS.create}>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog Author</label>
        <select
          name=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Luis">Luis</option>
          <option value="Other">Other</option>
        </select>
        {!isPending && <button>Add Now</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
