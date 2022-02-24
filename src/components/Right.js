import React from "react";
import styled from "styled-components";
import { MdMenu, MdDarkMode, MdLightMode } from "react-icons/md";
import adminImg from "../assets/admin.jpg";
const Right = () => {
  return (
    <Wrapper>
      <div className="right__top">
        <div className="menu__btn">
          <MdMenu />
        </div>

        <div className="theme__toggler">
          <MdDarkMode className="active" />
          <MdLightMode />
        </div>

        <div className="top__profile">
          <div className="info">
            <p>Hey, Reynal</p>
            <small className="text-muted">(Admin)</small>
          </div>

          <div className="profile_photo">
            <img src={adminImg} className="img profile-photo" alt="admin" />
          </div>
        </div>
      </div>
      <h5>recent updates</h5>
      <div className="recent__updates">
        <div className="updates">
          <aside>
            <div>
              <img src={adminImg} alt="img" className="img profile-photo" />
            </div>

            <div className="msg">
              <p>
                <b>Mike Tyson</b> received his order of novels.
              </p>
              <small className="text-muted">12:09pm</small>
            </div>
          </aside>

          <aside>
            <div>
              <img src={adminImg} alt="img" className="img profile-photo" />
            </div>

            <div className="msg">
              <p>
                <b>Reynal</b> received his order of shirts.
              </p>
              <small className="text-muted">2:09pm</small>
            </div>
          </aside>
          <aside>
            <div>
              <img src={adminImg} alt="img" className="img profile-photo" />
            </div>

            <div className="msg">
              <p>
                <b>Tp</b> received his order of boots.
              </p>
              <small className="text-muted">5:09pm</small>
            </div>
          </aside>
        </div>
      </div>

      <div className="sales">
        <div className="analytics">
          <div className="icon__container">
            <MdMenu />
          </div>

          <div class="time-info">
            <h5>online orders</h5>
            <small>last 24hours</small>
          </div>

          <div>
            <span className="perc">-56%</span>
          </div>

          <div>
            <span className="num">870</span>
          </div>
        </div>

        <div className="analytics">
          <div className="icon__container">
            <MdMenu />
          </div>

          <div class="time-info">
            <h5>online orders</h5>
            <small>last 24hours</small>
          </div>

          <div>
            <span className="perc">-56%</span>
          </div>

          <div>
            <span className="num">870</span>
          </div>
        </div>

        <div className="analytics-btn">Add Product</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  /* background: red; */
  padding: 1.3rem 1.3rem;

  .right__top {
    display: flex;
    justify-content: end;
    gap: 1.4rem;
    .menu__btn {
      display: none;
    }
    .theme__toggler {
      background: white;
      border-radius: 1.3rem;
      width: 3.5rem;
      height: 1.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 0.5rem;
      svg {
        font-size: 1.1rem;
      }
      svg.active {
        color: var(--primary-color);
      }
    }

    .top__profile {
      display: flex;
      gap: 1.5rem;
      text-align: right;
      .info p {
        padding: 0;
        margin: 0;
      }
    }
  }
  .recent__updates {
    background: var(--white);
    border-radius: 1rem;
    padding: 0.6rem;
    box-shadow: var(--shadow-3);
    /* width: 100%; */
    transition: var(--transition);
    cursor: pointer;
    margin: 1.77rem 0;
    &:hover {
      box-shadow: none;
    }
    aside {
      display: grid;
      grid-template-columns: 3rem auto;
      gap: 1rem;
      margin-bottom: 1.2rem;
      .msg p {
        margin: 0;
        padding: 0;
      }
    }
  }
  .sales {
    .analytics {
      margin-bottom: 1.3rem;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      background: var(--white);
      border-radius: 1.2rem;
      .icon__container {
        background: var(--grey-50);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 1.2rem;
          /* color: var(--white); */
        }
      }

      .time-info {
        h5 {
          margin: 0;
          padding: 0;
          font-size: 0.9rem;
        }
        small {
          color: var(--color-muted);
        }
      }

      .perc {
        color: red;
      }
      .num {
        font-weight: 400;
      }
    }
    .analytics-btn {
      border: 1px dashed var(--primary-color);
      display: flex;
      justify-content: center;
      padding: 0.6rem 0;
      border-radius: 1.2rem;
      cursor: pointer;
    }
  }
`;
export default Right;
