import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import {
  HomeRounded,
  Facebook,
  Twitter,
  GitHub,
  LinkedIn,
  Telegram,
  SchoolRounded,
  WorkRounded,
} from "@material-ui/icons";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
import "./style.scss";

function Header(props) {
  const pathName = props?.location?.pathname;
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="header">
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/" className="p-0">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <NavbarToggle />

      <NavbarCollapse>
        <Nav className="header_left">
            
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={pathName === "/resume" ? "header_link_active" : "header_link"}
          >
            RESUME
          </Nav.Link>

           {/* Portfolio Link */}
           <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathName === "/portfolio" ? "header_link_active" : "header_link"}
          >
            PORTFOLIO
          </Nav.Link>

          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={pathName === "/contact" ? "header_link_active" : "header_link"}
          >
            CONTACT
          </Nav.Link>
        </Nav>

        <div className="header_right">
            {Object.keys(resumeData.socials).map((key,index) => (
                <a key={index} href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
            ))}
            <CustomButton text="MY CV" icon={<GetAppIcon />}/>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

export default withRouter(Header);
