import React, {useState, useEffect} from 'react';
import Article from '../../components/article/Article';
import './blog.css';

function ToText(node) {
  let tag = document.createElement("h3");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

const Blog = () => {
  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madfish001";
  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null
  })

  useEffect(() => {
    fetch(mediumURL)
    .then (res => res.json())
    .then(info => {
      setBlog({item: info.items, isLoading: false})
    })
    .catch(err => setBlog({error: err.message}))
    }, [])

  const readBlogs = () =>{
    if(blog.item){
      return(
        <div className="gpt3__blog section__padding" id="blog">
          <div className="gpt3__blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
          </div>
          <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupB">
              <Article imgUrl={blog.item[0]["thumbnail"]} date={blog.item[0]["pubDate"]} title={ToText(blog.item[0]["title"])} text={ToText(blog.item[0]["content"])} link={blog.item[0]["link"]} />
              <Article imgUrl={blog.item[1]["thumbnail"]} date={blog.item[1]["pubDate"]} title={ToText(blog.item[1]["title"])} text={ToText(blog.item[1]["content"])} link={blog.item[1]["link"]} />
              <Article imgUrl={blog.item[2]["thumbnail"]} date={blog.item[2]["pubDate"]} title={ToText(blog.item[2]["title"])} text={ToText(blog.item[2]["content"])} link={blog.item[2]["link"]} />
              <Article imgUrl={blog.item[3]["thumbnail"]} date={blog.item[3]["pubDate"]} title={ToText(blog.item[3]["title"])} text={ToText(blog.item[3]["content"])} link={blog.item[3]["link"]} />
              <Article imgUrl={blog.item[4]["thumbnail"]} date={blog.item[4]["pubDate"]} title={ToText(blog.item[4]["title"])} text={ToText(blog.item[4]["content"])} link={blog.item[4]["link"]} />
              <Article imgUrl={blog.item[5]["thumbnail"]} date={blog.item[5]["pubDate"]} title={ToText(blog.item[5]["title"])} text={ToText(blog.item[5]["content"])} link={blog.item[5]["link"]} />
            </div>
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className="gpt3__blog section__padding" id="blog">
      {blog.isLoading? "Loading..." : readBlogs()}
    </div>
  )
}

export default Blog;
