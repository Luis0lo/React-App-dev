import React from 'react';
import '../../App.css';
import BlogCSS from '../blog/Blog.module.css';
import BlogHome from '../blog/BlogHome';
import Create from '../blog/Create';
import BlogHeader from '../blog/BlogHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from '../blog/BlogDetails';

const Blog = () => {
  return (
    <Router>
      <div className={BlogCSS.blog}>
        <BlogHeader />
        <div className={BlogCSS.blog_content}>
          <Switch>
            <Route path="/Blog" exact component={BlogHome} />
            <Route path="/Blog/Create" component={Create} />
            <Route path="/Blog/:id" component={BlogDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Blog;
