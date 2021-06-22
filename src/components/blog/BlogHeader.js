import React from 'react';
import BlogCSS from './Blog.module.css';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  return (
    <nav className={BlogCSS.blog_header}>
      <h1>Blog with Luis</h1>
      <div className={BlogCSS.links}>
        <Link to="/blog">Blogs</Link>
        <Link to="/blog/Create">New Blog</Link>
      </div>
    </nav>
  );
};

export default BlogHeader;
