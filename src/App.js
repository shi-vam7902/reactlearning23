import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Routes/Home";
import { Errs } from "./components/Routes/Errs";
import { Api } from "./components/Personal/Api";
import { TaskComponent } from "./components/Tasks/TaskComponent";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Tasks/Product";
import {AboutUs} from "./components/Routes/AboutUs"
import { ButtonExample } from "./components/mui/ButtonExample";
import { ApiDemo1 } from "./components/apis/ApiDemo1";
function App() {
  return (
    <div className="App">
      <Header />
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/*" element={<Errs />}></Route>
        <Route path="/api" element={<Api></Api>}></Route>
        <Route path="/muibutton" element={<ButtonExample/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tasks" element={<TaskComponent/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/get" element={<ApiDemo1/>}></Route>
        <Route path="/" element={<AboutUs/>}></Route>
      </Routes>

      {/* 
<Routes>
  <Route path='/shivam' element={<AboutUs/>}></Route>
</Routes> */}
    </div>
  );
}
export default App;
