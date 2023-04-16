import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Users } from './components/Users/Users';
import { Student } from './components/Students/Student';

function App() {
  var apptitle = "React Learning 23"  
  var userdata = "this is payload"
  return (
    <div className="App">
      <Header apptitle={apptitle}/>
      {/* <Content payloads={userdata}/> */}
      {/* <Users/> */}
      <Student/>
      <Footer/>
    </div>
  );
}
export default App;
