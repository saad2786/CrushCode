import React from 'react'
import image from "../images/web.png"
import "./BlogCard.css"
function BlogCard({title, date}) {
  return (
    <div className='blogCard'>
        <img alt='thumbnail' src={image} className="thumbnail"/>
        <div className='details'>
            <h6 className='title'>{title}</h6>
            <p className='date'>{date}</p>
            <p className='expand'>View In Details</p>
        </div>
    </div>
  )
}

export default BlogCard