import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    a {
      text-decoration: none;
      color: #333;

      &:hover {
        border-bottom: 2px solid orange;
        color: orange;
      }
    }

    .active {
      border-bottom: 2px solid orange;
      color: orange;
    }
  }
  .dropdownContainer {
    position: relative;

    ul {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #333;
      display: none;
      list-style: none;
      padding: 0.5rem;
      border-radius: 4px;
    }

    &:hover ul {
      display: block;
    }
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <h4>my nav</h4>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li className="dropdownContainer">
          <NavLink activeClassName="active" to="/service">
            Service
          </NavLink>

          <ul>
            <li>
              <Link to="/service/carrepair">Car Repair</Link>
            </li>
            <li>
              <Link to="/service/carhire">Car Hire</Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink activeClassName="active" to="/student">
            Student
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/blog">
            Blog
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default NavBar;
