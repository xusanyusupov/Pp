import React, { useState } from "react";
import "../header/header.scss";
import { Link, NavLink } from "react-router-dom";

// img st
import headLogo from "../../assets/headLogo.svg";
// img en

// icon st
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping, FaXmark } from "react-icons/fa6";
import { FiBarChart2 } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
// icpn en


const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <header>
        <nav>
          <div className="container">
            {/* top header start  */}
            <div className="header__link-wrapper">
              <div className="header__links">
                <ul>
                  <li>
                    <span>
                      <NavLink to={"/"} className="link">
                        Home
                      </NavLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <NavLink to={"/payment"} className="link">
                        Payment
                      </NavLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <NavLink to={"/about"} className="link">
                        About
                      </NavLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <NavLink to={"/return"} className="link">
                        Return
                      </NavLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <NavLink to={"/garant"} className="link">
                        Garant
                      </NavLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <NavLink to={"/contact"} className="link">
                        Contact
                      </NavLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <NavLink to={"/blog"} className="link">
                        Blog
                      </NavLink>
                    </span>
                  </li>
                </ul>
                <button className="media__category">
                  <FaBarsStaggered />
                </button>{" "}
              
              </div>
              <div className="header__call">
                <b>8 (800) 890-46-56</b>
                <p>Заказать звонок</p>
              </div>
            </div>
            {/* top header end  */}

            {/* main header start  */}
            <div className="main__header">
              <div className="main__header-media">
                <div className="main__header-img">
                  <Link to={"/"} className="link">
                    <img src={headLogo} alt="" />
                  </Link>
                </div>
                <div className="main__header-catalog">
                  <button className="main__header-BTN">
                    <HiOutlineBars3CenterLeft />
                    <p>Categories</p>
                  </button>
                </div>
              </div>

              <div className="main__header-search">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search by products"
                />
                <button>
                  <IoSearch />
                </button>
              </div>
              <div className="main__header-btn">
                <button className="main__header-btns">
                  <FaRegHeart className="icon" />
                  <span>Liked</span>
                </button>
                <button className="main__header-btns">
                  <FiBarChart2 className="icon" />
                  <span>Comparison</span>
                </button>
                <button className="main__header-btns">
                  <FaCartShopping className="icon" />
                  <span>Basket</span>
                </button>
              </div>
            </div>
            {/* main header end  */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
