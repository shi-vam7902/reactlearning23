
// import logo from './logo.svg';
import './App.css';

function App() {
  
  var name = 'royal'
  var year = 2023
  var isActive = true
  var data ={
    city:"Ahmedabad",
    state:"Gujarat"
  }
  console.log(data);
  
  return (
    <div className="App">
      APP COMPONENT
    <h1>Name = {name}</h1>
    <h1>year = {year}</h1>
    <h1>status = {isActive == true ? "YES" : "NO"}</h1>
    <h1>city = {data.city}</h1>
    <h1>State = {data.state}</h1>

    </div>
  );
}

export default App;
