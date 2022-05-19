import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, text, link }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{title.length > 50 ? title.substring(0, 50) + "..." : title}</h3>
        <p>{text.length > 150 ? text.substring(0, 150) + "..." : text}</p>
      </div>
      <br />
      <a href={link} target="_blank">Read Full Article</a>
    </div>
  </div>
);

export default Article;
