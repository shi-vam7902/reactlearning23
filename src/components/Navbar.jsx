import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to={"/"}>
          React Learning
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Welome <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to={"/product"}>
                Task Product <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to={"/aboutus"}>
                About Me
              </Link>
            </li>
            
            <li class="nav-item active">
              <Link class="nav-link" to={"/get"}>
                REST API 
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to={"/tasks"}>
                Task Weather
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to={"/dynamicform"}>
                Dynamic Form
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to={"/muibutton"}>
                Button Task
              </Link>
            </li>
          </ul>
        
        </div>
      </nav>
    </div>
  );
};
