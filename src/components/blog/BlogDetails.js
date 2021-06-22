import React from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';
import BlogCSS from './Blog.module.css';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs/' + id);

  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(history.push('/blog'));
  };

  return (
    <div className={BlogCSS.blog_details}>
      {isPending && <div> Loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>By {blog.author}</p>
          <div>{blog.body}</div>
          <div className={BlogCSS.btn}>
            <button onClick={handleClick}>Delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
