import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          React Learning
        </a>
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
              <Link class="nav-link" to={"/employees"}>
                Employees <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/aboutus"}>
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/storage"}>
                Storage Demo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/api"}>
                Api Demo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/apijh"}>
                Api Demo 1
              </Link>
            </li>
          </ul>
        
        </div>
      </nav>
    </div>
  );
};
