import React from "react";
import styled from "styled-components";
import { MdPlayDisabled, MdQueue, MdCallSplit } from "react-icons/md";
import Table from "./Table";
import { MdMenu } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleHeader } from "../redux/headerSlice";
const Center = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="center__top">
        <MdMenu className="menz" onClick={() => dispatch(toggleHeader())} />
        <h5>Dashboard</h5>
        <div className="date">
          <input type="date" />
        </div>
      </div>

      <div className="insights">
        <Row>
          <Col md={12} lg={4} className="py-3">
            <aside className="sales">
              <div className="icon">
                <MdPlayDisabled />
              </div>

              <div className="info">
                <div>
                  <p>Total Sales</p>
                  <h5>$54,888</h5>
                </div>
                {/* spinner */}
                <div className="spinner">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <p>91%</p>
                </div>
              </div>

              <div>
                <small className="text-muted">last 24 hours</small>
              </div>
            </aside>
          </Col>

          <Col md={12} lg={4} className="py-3">
            <aside className="products">
              <div className="icon products">
                <MdQueue />
              </div>

              <div className="info">
                <div>
                  <p>Total Products</p>
                  <h5>$54,888</h5>
                </div>
                {/* spinner */}
                <div className="spinner">
                  <svg>
                    <circle
                      className="products"
                      cx="38"
                      cy="38"
                      r="36"
                    ></circle>
                  </svg>
                  <p>91%</p>
                </div>
              </div>

              <div>
                <small className="text-muted">last 24 hours</small>
              </div>
            </aside>
          </Col>

          <Col md={12} lg={4} className="py-3">
            <aside className="users">
              <div className="icon users">
                <MdCallSplit />
              </div>

              <div className="info">
                <div>
                  <p>Total Users</p>
                  <h5>$54,888</h5>
                </div>
                {/* spinner */}
                <div className="spinner">
                  <svg>
                    <circle className="users" cx="38" cy="38" r="36"></circle>
                  </svg>
                  <p>91%</p>
                </div>
              </div>

              <div>
                <small className="text-muted">last 24 hours</small>
              </div>
            </aside>
          </Col>
        </Row>
      </div>

      {/* table */}
      <div>
        <h5>Recent Orders</h5>
        <div className="tab__cont">
          <Table />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 1.5rem;
  /* background-color: red; */
  .center__top {
    padding: 1.3rem 0;
    svg {
      font-size: 1.6rem;
    }
    .date {
      background: var(--white);
      display: inline-block;
      border-radius: 0.9rem;
      padding: 0.23rem 1.23rem;
    }
    input {
      background: transparent;
      border: none;
      outline: 0;
      height: 1.2rem;
    }
  }
  .insights {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 1fr; */
    /* gap: 1.5rem; */
    margin-bottom: 1.3rem;

    aside {
      background: var(--white);
      border-radius: 1rem;
      padding: 0.9rem;
      box-shadow: var(--shadow-3);
      /* width: 100%; */
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        box-shadow: none;
      }

      .icon {
        background: var(--primary-color);
        border-radius: 50%;
        color: white;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 1.7rem;
        }
      }

      .icon.users {
        background: var(--green-zz);
      }
      .icon.products {
        background: var(--red-zz);
      }

      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-weight: 300;
        }
        h5 {
          font-weight: 400;
        }
        p,
        h5 {
          margin-bottom: 0.5rem;
        }
        .spinner {
          position: relative;
          height: 90px;
          width: 90px;
          border-radius: 50%;
          p {
            position: absolute;
            bottom: 2rem;
            left: 2rem;
          }
          svg {
            height: 6rem;
            width: 6rem;
            circle {
              fill: none;
              stroke: var(--primary-color);
              stroke-width: 14;
              stroke-linecap: round;
              transform: translate(5px, 5px);
              stroke-dasharray: 110;
              stroke-dashoffset: 90;
            }
            circle.users {
              stroke-dasharray: -30;
              stroke-dashoffset: 200;
            }

            circle.products {
              stroke-dasharray: 80;
              stroke-dashoffset: 20;
            }
          }
          p {
          }
        }
      }
    }
  }

  .tab__cont {
    background: var(--white);
    border-radius: 1.5rem;
    margin-bottom: 1.1rem;
    width: 100%;
    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    .menz {
      display: none;
    }
  }
`;
export default Center;
