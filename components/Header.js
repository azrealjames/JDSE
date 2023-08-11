
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from 'react-router-dom';
import JDlogonobackground from '../app/assets/img/JDlogonobackground.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color='primary' sticky='top' expand='md'>

      <NavbarBrand href='/' className='ms-5'>
        <img src={JDlogonobackground} alt='James Duran logo' className='float-start' />
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <i className='fa fa-home fa-lg' /> Home
            </NavLink>
            {/* <NavLink className='nav-link' to='/about'>
              <i className='fa fa-info fa-lg' /> About
            </NavLink> */}
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/work'>
              <i className='fa fa-info fa-lg' /> Work
            </NavLink>
          </NavItem>
          <NavItem>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <i className='fa fa-address-card fa-lg' /> Contact
            </NavLink>
          </NavItem>
        </Nav>
        {/* <UserLoginForm /> */}
      </Collapse>
    </Navbar>
  );
};

export default Header;