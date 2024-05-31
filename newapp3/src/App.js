import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import Login from './screens/Login';
import Register from './screens/Register';
import 'react-toastify/dist/ReactToastify.css'
import Home from './screens/Home'
import Properties from './screens/Properties';
import PropertyDetails from './screens/PropertyDetails';
import AddProperty from './screens/AddProperty';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='' element = {<Login/>}/>
        <Route path='login' element = {<Login/>}/>
        <Route path="register" element = {<Register/>}/>
        <Route path="home" element = {<Home/>}/>
        <Route path="properties" element = {<Properties/>}/>
        <Route path="property-details" element = {<PropertyDetails/>}/>
        <Route path='add-property' element={<AddProperty />} />

        
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
