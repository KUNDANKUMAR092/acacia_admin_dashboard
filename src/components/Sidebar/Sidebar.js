/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Nav, Collapse, NavItem } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed)
  };
  const toggle1 = () => {
    setCollapsed1(!collapsed1)
  }; 
  const toggle2 = () => {
    setCollapsed2(!collapsed2)
  };  

  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        {/* <a
          href="https://www.creative-tim.com"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a> */}
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          {/* Creative Tim */}
          <img alt="react-logo" className="userIcon" src={require("assets/img/VerandaAcacia_Horizontal_student.webp").default}  />
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        {/* <Nav>
          <li
            className={
              activeRoute("/dashboard")
            }
          >
            kkkkkk {"/admin/dashboard"}
          </li>
        </Nav> */}
        {/* <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav> */}
        <Nav vertical >
          <NavItem className={ activeRoute("/dashboard") }>
            <NavLink
              to={"/admin/dashboard"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="nc-icon nc-bank" />
              <p>Dashboard</p>
            </NavLink>
          </NavItem>

          <NavItem className={ activeRoute("/icons") }>
            <NavLink
              to={"/admin/icons"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="nc-icon nc-diamond" />
              <p>Icons</p>
            </NavLink>
          </NavItem>

          <NavItem className={ activeRoute("/maps") }>
            <NavLink
              to={"/admin/maps"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="nc-icon nc-pin-3" />
              <p>Maps</p>
            </NavLink>
          </NavItem>

          <NavItem className={ activeRoute("/notifications") }>
            <NavLink
              to={"/admin/notifications"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="nc-icon nc-bell-55" />
              <p>Notifications</p>
            </NavLink>
          </NavItem>

          <NavItem className={ activeRoute("/user-page") }>
            <NavLink
              to={"/admin/user-page"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="nc-icon nc-single-02" />
              <p>User Profile</p>
            </NavLink>
          </NavItem>

          <div>
            <NavItem
              onClick={toggle}
              className={`${classNames({ "menu-open": !collapsed })}`}
            >
              <a className="dropdown-toggle dropdown-nav-toggle">
                <i className="nc-icon nc-caps-small" />
                <p>Batch Management</p>
              </a>
            </NavItem>
            <Collapse
              isOpen={!collapsed}
              navbar
              className={classNames("items-menu", { "mb-1": !collapsed })}
            >
              <NavItem className={ `pl-4 ${activeRoute("/tables")}` }>
                <NavLink
                  to={"/admin/tables"}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-tile-56" />
                  <p>Table List</p>
                </NavLink>
              </NavItem>

              <NavItem className={ `pl-4 ${activeRoute("/typography")}` }>
                <NavLink
                  to={"/admin/typography"}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-caps-small" />
                  <p>Typography</p>
                </NavLink>
              </NavItem>

              <NavItem className={ `pl-4 ${activeRoute("/next-day-plan")}` }>
                <NavLink
                  to={"/admin/next-day-plan"}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-tile-56" />
                  <p>Next Day Plan</p>
                </NavLink>
              </NavItem>

              <NavItem className={ `pl-4 ${activeRoute("/discussion-forum")}` }>
                <NavLink
                  to={"/admin/discussion-forum"}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-caps-small" />
                  <p>Discussion Forums</p>
                </NavLink>
              </NavItem>
            </Collapse>
          </div>

          <div>
            <NavItem
              onClick={toggle1}
              className={`${classNames({ "menu-open": !collapsed1 })}`}
            >
              <a className="dropdown-toggle dropdown-nav-toggle">
                <i className="nc-icon nc-caps-small" />
                <p>Admin Operations</p>
              </a>
            </NavItem>
            <Collapse
              isOpen={!collapsed1}
              navbar
              className={classNames("items-menu", { "mb-1": !collapsed1 })}
            >
              <NavItem className={ `pl-4 ${activeRoute("/add-new-corporate")}` }>
                <NavLink
                  to={"/admin/add-new-corporate"}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-tile-56" />
                  <p>Add New Corporate</p>
                </NavLink>
              </NavItem>
            </Collapse>
          </div>

          <div>
            <NavItem
              onClick={toggle2}
              className={`${classNames({ "menu-open": !collapsed2 })}`}
            >
              <a className="dropdown-toggle dropdown-nav-toggle">
                <i className="nc-icon nc-caps-small" />
                <p>Edit Corporate</p>
              </a>
            </NavItem>
            <Collapse
              isOpen={!collapsed2}
              navbar
              className={classNames("items-menu", { "mb-1": !collapsed2 })}
            >
              <NavItem className={ `pl-4 ${activeRoute("/edit-corporate-configurations")}` }>
                <NavLink
                  to={"/admin/edit-corporate-configurations"}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-tile-56" />
                  <p>Configurations</p>
                </NavLink>
              </NavItem>
              <NavItem className={ `pl-4 ${activeRoute("/modify-profile")}` }>
                <NavLink
                  to={"/admin/modify-profile"}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-tile-56" />
                  <p>Modify Profile</p>
                </NavLink>
              </NavItem>
            </Collapse>
          </div>

          <NavItem className={ activeRoute("/my-enquiries") }>
            <NavLink
              to={"/admin/my-enquiries"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="nc-icon nc-single-02" />
              <p>My Enquiries</p>
            </NavLink>
          </NavItem>

          <NavItem className={ activeRoute("/create-batch") }>
            <NavLink
              to={"/admin/create-batch"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="nc-icon nc-single-02" />
              <p>Create Batch</p>
            </NavLink>
          </NavItem>

          
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
