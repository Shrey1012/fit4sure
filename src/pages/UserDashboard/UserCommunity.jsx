import React from 'react'
import User_dash_nav from './User_dash_nav';
import './UserCommunity.css'
import plus from '../../assets/plus.svg';
import blog1 from '../../assets/blog1.png';
import heart_outline from '../../assets/heart_outline.svg';
import comment_outline from '../../assets/comment_outline.svg';

const UserCommunity = () => {
  return (
    <>
    <User_dash_nav />
    <div className='community-main'>
      <div className='add-btn'>
        <button className='add-post'> <img src={plus} alt="" /> Add Post</button>
      </div>
      <div className='com-filters'>
        <button className='filtr'>All</button>
        <button className='filtr'>Blogs</button>
        <button className='filtr'>Discussions</button>
        <button className='filtr'>Transformations</button>
        <button className='filtr'>Recipes</button>      
      </div>

      <div className='com-blogs'>
        <h3>Blogs</h3>
        <div className='blog-card'>
          <img src={blog1} alt="blog" />
          <h3>Manage your workout</h3>
          <p>Lorem ipsum dolor sit amet. Et rerum quibusdam est rerum quis id omnis omnis. Et fuga...</p>
          <button>Know more</button>
        </div>
      </div>
      <div className='com-discussions'>
      <h2>Discussions</h2>
        <div className='discussion-card'>
          <h3>Is it easy to manage routinr?</h3>
          <p>Lorem ipsum dolor sit amet. Et rerum quibusdam est rerum quis id omnis omnis.quibusdam est rerum quis id omnis omnis Et fuga...</p>
          <button><img src={heart_outline} alt="" /></button>
          <button><img src={comment_outline} alt="" /></button>
        </div>
      </div>
      <div className='com-transformations'>
        <h2>Transformation stories</h2>
        <div className='trans-card'>
          <img src={blog1} alt="blog" />
          <h3>Niyati(itne years old - dhandha)</h3>
          <p>Lorem ipsum dolor sit amet. Et rerum quibusdam est rerum quis id omnis omnis. Et fuga...</p>
          <button>Know more</button>
        </div>
      </div>
      <div className='com-recipes'>
        <h2>Healthy recipes</h2>
        <div className='recipe-card'>
          <img src={blog1} alt="blog" />
          <h3>Recipe name</h3>
          <p>Lorem ipsum dolor sit amet. Et rerum quibusdam est rerum quis id omnis omnis. Et fuga...</p>
          <button>Read</button>
          <button><img src={heart_outline} alt="" /></button>
          </div>
      </div>
    </div>
    </>
  )
}

export default UserCommunity
