import { NavLink } from "react-router-dom";
import styled from "styled-components"
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img className="logo" src="../images/Logo.png" alt="LOGO" />
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
};

const MainHeader = styled.header`
    padding : 0 2.8rem;
    height: 6rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    .logo{
        height: 26px;
        width: 20rem;
    }
`

export default Header
