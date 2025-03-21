import React from "react";
import { BsCart3 } from "react-icons/bs";

function SideBar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon">X</span>
      </div>


      <ul className="sidebar-list">
        <li  className="sidebar-list-item">
            <a href="">
                <BsCart3 className="icon"/> Dashboard
            </a>
        </li>
        <li className="sidebar-list-item" >
            <a href="">
                <BsCart3 className="icon"/> Products
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsCart3 className="icon"/> Categories
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsCart3 className="icon"/> Customers
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsCart3 className="icon"/> Inventory
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsCart3 className="icon"/> Reports
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsCart3 className="icon"/> Setting
            </a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
