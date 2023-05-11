import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Users } from './components/Users/Users';
import { Student } from './components/Students/Student';
import { RegistraionForm } from './components/Forms/RegistraionForm';
import { Route, Routes } from 'react-router-dom';
import { Employee } from './components/Routes/Employee';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/Routes/AboutUs';
import { Home } from './components/Routes/Home';
import { Errs } from './components/Routes/Errs';
import { ContactUs } from './components/Routes/ContactUs';
import { StorageDemo } from './components/Storage/StorageDemo';
import { ApiDemo1 } from './components/apis/ApiDemo1';
import { ApiAddUser } from './components/apis/ApiAddUser';
import { ApiDemoFInal } from './components/apis/ApiDemoFInal';

function App() {
  var apptitle = "React Learning 23"  
  var userdata = "this is payload"
  return (
    <div className="App">
      
      <Navbar/>

      <Header apptitle={apptitle}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      
      <Route >
        <Route path="/employees" element={<Employee/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
      </Route>
      <Route path='/*' element={<Errs/>}></Route>
      <Route path="/register" element={<RegistraionForm></RegistraionForm>}></Route>
      <Route path='/employees/contactus/:id' element={<ContactUs/>}></Route>
      <Route path='/storage' element={<StorageDemo/>}></Route>
      <Route path='/api' element={<ApiDemo1/>}></Route>
      <Route path='/adduser' element={<ApiAddUser/>}></Route>
      <Route path='/apijh'element={<ApiDemoFInal/>}></Route>
      {/* <Route path='/employees/contactus/:id' element={<ContactUs/>}></Route> */}
      {/* <Route path="/" element={<Navbar/>}></Route> */}

      {/* <Content payloads={userdata}/> */}
      {/* <Users/> */}
      {/* <Student/> */}
      {/* <RegistraionForm/> */}
      {/* <Footer/> */}
      </Routes>











{/* 
<Routes>
  <Route path='/shivam' element={<AboutUs/>}></Route>
</Routes> */}

    </div>
  );
}
export default App;
