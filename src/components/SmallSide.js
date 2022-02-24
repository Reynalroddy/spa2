import React from "react";
import styled from "styled-components";
import { MdFastRewind } from "react-icons/md";
import logs from "../assets/logs.jpg";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { toggleHeader } from "../redux/headerSlice";
const Sidebar = () => {
  const { isOpen } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  //   const [showNav, setShowNav] = useState(false);
  return (
    <Wrapper>
      <div className={isOpen ? "cont show" : "cont"}>
        <div className="side__top">
          {/* img and logo */}
          <div className="side__image">
            <img src={logs} alt="side-img" className="img" />
          </div>
          <MdFastRewind onClick={() => dispatch(toggleHeader())} />
        </div>

        <div className="side__bars">
          <ul className="sidebar__links">
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <NavLink
                  to={url}
                  key={id}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <li>
                    {icon}
                    <span>{text}</span>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>

        <div className="btn-container">
          <button className="my-btn my-btn-primary">Logout</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 5;
  background-color: white;
  transition: var(--transition);
  display: flex;
  flex-direction: column;

  .cont {
    width: 18rem;
    padding: 0 1.5rem;
    margin-left: -25rem;
    transition: var(--transition);
  }
  .show {
    margin-left: 0;
  }
  .side__top {
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem 0;
    .side__image img {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
    }
    svg {
      font-size: 1.5rem;
    }
  }

  .side__bars {
    padding-top: 2rem;

    .sidebar__links {
      display: flex;
      flex-direction: column;
      gap: 1.3rem;
      .active {
        /* margin-left: 0; */
        background: var(--primary-color);
        color: var(--white);
        border-radius: 1.4rem;
      }
      a {
        color: var(--color-muted);
        height: 2.3rem;
        padding: 0.4rem 0;
        &:hover {
          background: var(--primary-color);
          color: var(--white);
          border-radius: 1.4rem;
        }
        li {
          font-weight: bold;
          margin-left: 1rem;
          display: flex;
          align-items: center;
          transition: var(--transition);
          &:hover {
            margin-left: 0.5rem;
          }
          span {
            margin-left: 1.1rem;
            font-size: 0.79rem;
          }
          svg {
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  .btn-container {
    position: absolute;
    bottom: 20px;
    margin-left: 1.5rem;
  }
  .show {
    margin-left: 0;
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export default Sidebar;
