import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";

import Home from "./Application/Pages/Home";
import OtherLayout from "./Application/Pages/otherlayout";
import CreateError from "./Application/Pages/CreateError";

class App extends Component {
render() {
  return (
    <HashRouter>
        <div class="row text-center">
          <h1 class="lobster-regular">
            &#40;&#123;react<span class="red">ion</span>&#125;&#41;;
          </h1>
          <p class="introtext">The ficticious bulletin board for folk to talk react stuff</p>
        </div>
        <div class="row">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <ul class="nav nav-tabs nav-fill">
                <li class="nav-item"><NavLink className={"nav-link"} to="/">Homepage</NavLink></li>
                <li class="nav-item"><NavLink className={"nav-link"} to="/otherlayout">Working Bulletin Board</NavLink></li>
                <li class="nav-item"><NavLink className={"nav-link"} to="/CreateError">Broken Bulletin Board</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/otherlayout" element={<OtherLayout />}></Route>
        <Route exact path="/CreateError" element={<CreateError />}></Route>
      </Routes>
    </HashRouter>
  );
}
}
export default App;

    