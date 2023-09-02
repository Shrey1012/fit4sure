import React,{useState, useEffect} from 'react'
import './Blogs.css';
import axios from 'axios';
import BlogCard from './BlogCard'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/admin/blog/all')
    .then((response) => {
      setBlogs(response.data.blog);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div className='blogs-main'>
        <div className='blogs-top'>Blogs</div>
       <div className='all-blogs'>
      {
        blogs.map((blog) => (

          <BlogCard 
            key={blog._id}
            image={blog.image}
            heading={blog.heading}
            description={blog.description}
          />
        ))
      }
      </div>
    </div> 
  )
}

export default Blogs