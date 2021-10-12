import React from "react";
import classes from "./navBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const topNavbar = () => {
  $(document).ready(function () {
    $(function () {
      $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass(
          "navbar-collapse collapse show"
        );
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
          $("button.navbar-toggler").click();
        }
      });
    });
  });

  return (
    <div>
      <Navbar expand="md" fixed="top" className={classes.nav} id="nav">
        <Container id="container">
          <Navbar.Brand
            href="/Movies-App"
            className={classes.brand}
            style={{ color: "#130f40" }}
          >
            Top-Movies{" "}
            <i
              className="fas fa-film"
              style={{ fontSize: "30px", color: "#d35400" }}
            ></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                exact
                as={NavLink}
                to="/Movies-App"
                activeClassName={classes.active}
              >
                Movies
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/trending"
                activeClassName={classes.active}
              >
                Trending
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/favourite"
                activeClassName={classes.active}
              >
                Favourite
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default topNavbar;
