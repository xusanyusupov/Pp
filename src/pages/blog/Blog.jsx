import React from 'react'
import "../blog/blog.scss"
import Client1 from "../../assets/home1.svg"
import Client2 from "../../assets/home2.svg"
import Client3 from "../../assets/home3.svg"

import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
  return (
    <>
    <div className="container">
      <div className="blog__wrapper">
        <p className='blog__title'>Blog</p>
        <div className="blog__card">
          <div className="blog">
            <img src={Client1} alt="" />
            <div className='blog__flex'>
            <p>How to properly illuminate a house from the outside?</p>
            <button className="client"><MdArrowOutward /></button>
            </div>
          </div>
          <div className="blog">
            <img src={Client2} alt="" />
            <div className='blog__flex'>
            <p>How to properly illuminate a house from the outside?</p>
            <button className="client"><MdArrowOutward /></button>
            </div>
          </div>
          <div className="blog">
            <img src={Client3} alt="" />
            <div className='blog__flex'>
            <p>How to properly illuminate a house from the outside?</p>
            <button className="client"><MdArrowOutward /></button>
            </div>
          </div>
          <div className="blog">
            <img src={Client1} alt="" />
            <div className='blog__flex'>
            <p>How to properly illuminate a house from the outside?</p>
            <button className="client"><MdArrowOutward /></button>
            </div>
          </div>
          <div className="blog">
            <img src={Client2} alt="" />
            <div className='blog__flex'>
            <p>How to properly illuminate a house from the outside?</p>
            <button className="client"><MdArrowOutward /></button>
            </div>
          </div>
          <div className="blog">
            <img src={Client3} alt="" />
            <div className='blog__flex'>
            <p>How to properly illuminate a house from the outside?</p>
            <button className="client"><MdArrowOutward /></button>
            </div>
          </div>
        </div>       
      </div>
    </div>
    </>
  )
}

export default Blog