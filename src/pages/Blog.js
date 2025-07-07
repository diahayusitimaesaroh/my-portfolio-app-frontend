// src/pages/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Crafting Intuitive UI/UX with Figma',
      excerpt: 'Designing engaging interfaces and intuitive user experiences using Figma and modern design principles.',
      date: 'July 1, 2025',
      category: 'UI/UX Design',
      readTime: '4 min read'
    },
    {
      id: 2,
      title: 'Smooth Deployment with Vercel & CI/CD',
      excerpt: 'Deploying apps on Vercel, Netlify, or Render, and understanding the basics of CI/CD pipelines.',
      date: 'June 18, 2025',
      category: 'DevOps',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Mastering State Management in React',
      excerpt: 'Managing application state using Redux, Context API, or React Query for scalable web apps.',
      date: 'June 2, 2025',
      category: 'State Management',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="blog">
      <section className="blog-hero fade-in-up">
        <div className="container">
          <h1 className="section-title" data-aos="fade-down" style={{ color: 'white' }}>
  My Blog
</h1>

        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-posts">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="post-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="post-header">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="read-time">{post.readTime}</span>
                  <button className="btn-read">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
