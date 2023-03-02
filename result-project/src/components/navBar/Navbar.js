import React from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

const Header = styled(AppBar)`
  background: #ED397F;
  position:sticky;
`;

const Tabs = styled(NavLink)`
  font-size: 18px;
  margin-right: 20px;
  
  color : inherit;
  text-decoration : none;

`;
export default function Navbar(props) {
  return (
    <Header>
      <Toolbar>
        <Tabs to='/'>{props.title}</Tabs>
        {/* <Tabs to='/GetOldMarks'>Get Student Marks</Tabs>
        <Tabs to='/addNewMarks'>Add Student Marks</Tabs>
        <Tabs to='/ModilfyOldMarks'>Modify Student Marks</Tabs> */}
      </Toolbar>
    </Header>
  );
}
