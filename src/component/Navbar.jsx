import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  let activeStyle = {
    border: "2px solid #8dc63f",
    backgroundColor: "#8dc63f",
  
  };

  return (
    <div >
      <Bar>
        <div>
          <ul>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/top">
              Top Game
            </NavLink>
            <NavLink
              to='new'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              New Games
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/slots"
            >
              Slots
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/jackpots"
            >
              Jackpots
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/live"
            >
              Live
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="blackjack"
            >
              Blackjack
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="roulette"
            >
              Roulette
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="table"
            >
              Table
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="poker"
            >
              Poker
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="other"
            >
              Other
            </NavLink>
          </ul>
        </div>
      </Bar>
    </div>
  );
}

export default Navbar;

const Bar = styled.div`
  background-color: #373737;
  width: 100%;
  height: 50px;

  ul {
    list-style-type: none;
    letter-spacing: 1px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    a {
      text-decoration: none;
      transition: 0.3s;
      color: #fff;
      font-weight: 70px;
      font-size: 23px;
       padding:10px 20px;
    }

  }

  
`;
