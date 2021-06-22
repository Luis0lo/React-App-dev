import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const BlogHome = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}{' '}
    </div>
  );
};

export default BlogHome;
