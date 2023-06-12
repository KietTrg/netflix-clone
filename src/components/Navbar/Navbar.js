import styled from "styled-components";
import logo from "../../assets/images/logo2.png";
import { BsSearch } from "react-icons/bs";
import { useScrollY, useViewPort } from "../hooks";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineFire, AiOutlineStar } from "react-icons/ai";
import { GiDistraction, GiLovers } from "react-icons/gi";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { BiGhost } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiNetflixLine } from "react-icons/ri";

import MenuItem from "../Menu/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItemDesktop from "../Menu/MenuItemDesktop";
// import Menu from "../Menu/menu";
const SrcollToTop = () => {
  scroll.scrollToTop();
};
function Navbar(props) {
  const [scrollY] = useScrollY();
  const [keywords, setKeyWords] = useState("");
  const [widowWidth] = useViewPort();

  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeyWords(keywords);
    // if(keywords.length > 0){
    //   navigate(`/search?keywords=${keywords.trim()}`)
    // }else{
    //   navigate('/')
    // }
    keywords.length > 0
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate("/");
  };
  const goHome = () => {
    navigate("/");
    setKeyWords("");
  };
  return (
    <Navigation
      style={
        scrollY < 100
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#000" }
      }
    >
      <div className="navContainer">
        <div className="navLogo">
          <img src={logo} alt="" onClick={goHome}></img>
        </div>
        <div className="navSearch">
          <BsSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            onChange={handleChangeInput}
            value={keywords}
          />
        </div>

        {widowWidth > 800 ? (
          <div className="navIcon">
            <MenuItemDesktop name="Netflix" to="Home" />
            <MenuItemDesktop name="Trending" to="Trending" />
            <MenuItemDesktop name="Top" to="TopMovie" />
            <MenuItemDesktop name="Action" to="ActionMovie" />
            <MenuItemDesktop name="Comedy" to="ComedyMovie" />
            <MenuItemDesktop name="Horror" to="HorroMovie" />
            <MenuItemDesktop name="Romance" to="RomanceMovie" />
            <MenuItemDesktop name="Documentaries" to="DocumentariesMovie" />
          </div>
        ) : (
          <MenusPane>
            <MenuItem name="Netflix" Icon={RiNetflixLine} to="Home" />
            <MenuItem name="Trending" Icon={AiOutlineFire} to="Trending" />
            <MenuItem name="Top Movie" Icon={AiOutlineStar} to="TopMovie" />
            <MenuItem
              name="Action Movie"
              Icon={GiDistraction}
              to="ActionMovie"
            />
            <MenuItem
              name="Comedy Movie"
              Icon={MdOutlineTheaterComedy}
              to="ComedyMovie"
            />
            <MenuItem name="Horror Movie" Icon={BiGhost} to="HorroMovie" />
            <MenuItem name="Romance Movie" Icon={GiLovers} to="RomanceMovie" />
            <MenuItem
              name="Documentaries"
              Icon={HiOutlineDocumentText}
              to="DocumentariesMovie"
            />
          </MenusPane>
        )}
      </div>
    </Navigation>
  );
}
export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition: all 1s ease-in-out;
  z-index: 100;
  margin-bottom: 1px;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }
  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    .navLogo {
      width: 120px;
      /* margin-bottom: 15px; */
      margin-left: 10px;
      cursor: pointer;
      img {
        width: 100%;
      }
      @media only screen and (max-width: 600px) {
        margin-top: 10px;
      }
    }
    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      &:hover .iconSearch {
        color: var(--color-white);
      }
      .iconSearch {
        width: 20px;
        height: 20px;
        margin-top: 5px;
        cursor: pointer;
        transform: translateX(24px);
        color: #bbb;
      }
      input {
        font-size: 14px;
        border: 1px solid var(--color-white);
        color: var(--color-white);
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background-color: var(--color-background);
        transition: width 0.5s;
        &:focus {
          padding-left: 30px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
    .navIcon {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      .subMenu {
        position: relative;
        user-select: none;

        padding-right: 5px;

        cursor: pointer;
        transform: translateX(24px);
        color: rgba(255, 255, 255, 0.6);
        &:hover {
          color: var(--color-white);
        }
      }
      .subMenu:not(:last-child)::after {
        content: " |";
        margin: 0 2px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
`;
const MenusPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 46px;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;
  border-radius: 0px 10px 10px 0px;
  &:hover {
    width: 180px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;
    .iconMenu {
      color: #fff;
      font-size: 30px;
      margin-right: 8px;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      &:hover {
        color: #fff;
      }
    }
  }
`;
