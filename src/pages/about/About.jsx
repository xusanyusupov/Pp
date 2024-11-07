import React from "react";
import "../about/about.scss";
import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";

import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import userClient1 from "../../assets/home1.svg"
import userClient2 from "../../assets/home2.svg"
import userClient3 from "../../assets/home3.svg"

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about__wrapper">
          <div className="about__text">
            <strong>About</strong>
            <div className="about__products">
              <div>
                <p>170+</p>
                <b>Products</b>
              </div>
            </div>
            <div className="about__products">
              <div>
                <p>1000+</p>
                <b>Satisfied customers</b>
              </div>
            </div>
            <div className="about__products">
              <div>
                <p>170+</p>
                <b>Products</b>
              </div>
            </div>
          </div>

          <div className="about__blog">
            <div>
              <p>
                The NORNLIGHT online store offers a wide range of lamps for
                lighting your home or office. Here you will find a variety of
                lamp models, from modern and stylish to classic and elegant. We
                offer high-quality and reliable lamps from the best
                manufacturers that will give you comfort and coziness.
              </p>
            </div>
            <div>
              <p>
                When you buy lamps in our online store, you get an excellent
                price-quality ratio. We deliver all over Russia so that every
                customer can enjoy beautiful light and the convenience of online
                shopping. Contact us today and turn your home into an oasis of
                warmth and light with NORNLIGHT
              </p>
            </div>
            <div>
              <p>
                The NORNLIGHT online store offers a wide range of lamps for
                lighting your home or office. Here you will find a variety of
                lamp models, from modern and stylish to classic and elegant. We
                offer high-quality and reliable lamps from the best
                manufacturers that will give you comfort and coziness.
              </p>
            </div>
            <div>
              <p>
                When you buy lamps in our online store, you get an excellent
                price-quality ratio. We deliver all over Russia so that every
                customer can enjoy beautiful light and the convenience of online
                shopping. Contact us today and turn your home into an oasis of
                warmth and light with price-quality ratio. We deliver all over
                Russia so that every customer can enjoy beautiful light and the
                convenience of online shopping. Contact us today and turn your
                home into an oasis of warmth and light with NORNLIGHT
              </p>
            </div>
          </div>
        </div>
        <div className="about__brand">
          <div className="brand__top">
            <b>Only proven brands</b>
            <div className="flex">
              <button className="about__left">
                <HiOutlineArrowNarrowLeft />
              </button>
              <button className="about__left">
                <HiOutlineArrowSmallRight />
              </button>
            </div>
          </div>
          <div className="about__brand-img">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
          </div>
        
        </div>
        <div className="about__client">
            <div className="client__result">
                <img src={userClient1} alt="" />
                <div className="client__text">
                    <p>How to properly illuminate a house from the outside?</p>
                    <button className="client__btn"><MdArrowOutward /></button>
                </div>
            </div>
            <div className="client__result">
                <img src={userClient2} alt="" />
                <div className="client__text">
                    <p>How to properly illuminate a house from the outside?</p>
                    <button className="client__btn"><MdArrowOutward /></button>
                </div>
            </div>
            <div className="client__result">
                <img src={userClient3} alt="" />
                <div className="client__text">
                    <p>How to properly illuminate a house from the outside?</p>
                    <button className="client__btn"><MdArrowOutward /></button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
