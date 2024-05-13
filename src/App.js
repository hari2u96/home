// import { useState } from 'react';
import './App.css';
// import { Provider } from './Context/Cont';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Routess/Home';
import About from './Routess/About';
import Contact from './Routess/Contact';
import User from './Routess/User';
import Login from './Routess/Login';
import Dash from './Routess/Dash';
// import Propps from './Props/Propps'; 
// import Statess from './States/Statess';
// import Child1 from './Context/Child1' 
// import Axio from "./Axi/Axio";



function App() {
  // const details ={
  //   name:"Hari Prasath",
  //   age:26,
  //   place:"Trichy",
  //   college:"Loyola"
  // }

  // let [arr]= useState(["Hari","Prasath","Mayila","Laya"])

  return ( 

    <>
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/user/1'>User 1</Link></li>
          <li><Link to='/user/2'>User 2</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
    {/* //     <Provider value={arr} > */}
        {/* <Statess/> */}
        {/* <Propps {...details} />  */}
      {/* <Child1/> */}
        {/* </Provider> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dash' element={<Dash />} />

        </Routes>
      </BrowserRouter>


    {/* {/* // </>
    // Axios
    <>
    <Axio/>  */}
   
    </> 
  );
}

export default App;
