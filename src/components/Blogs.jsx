import React from 'react'
import BlogCard from './BlogCard'
function Blogs() {
  return (
    <div className='blogs'>
    <div className='blog-heading'>
        <h2>Daily Programming Blogs</h2>
    </div>
        <div className='Cards'>
        <BlogCard title="loremEt sit culpa nisi qui" date="14 June 2003"/>
        <BlogCard title="loremEt sit culpa nisi qui" date="14 June 2003"/>
        <BlogCard title="loremEt sit culpa nisi qui" date="14 June 2003"/>
        <BlogCard title="loremEt sit culpa nisi qui" date="14 June 2003"/>
        <BlogCard title="loremEt sit culpa nisi qui" date="14 June 2003"/>
        <BlogCard title="loremEt sit culpa nisi qui" date="14 June 2003"/>
        <BlogCard title="loremEt sit culpa nisi qui" date="14 June 2003"/>
        </div>
    </div>
  )
}

export default Blogs