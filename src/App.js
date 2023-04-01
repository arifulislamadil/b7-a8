import logo from './logo.svg';
import './App.css';
import CollapsibleExample from './components/common/navbar/Navbar';
import Home from './components/home/Home';
import SideCart from './components/sideCart/SideCart';
import { useState } from 'react';


function App() {
 const [readingTime,setReadingTime]=useState('');
 const handleTime = (time)=>{
  const previousReadingTime = JSON.parse(localStorage.getItem("readingTime"));
  if(previousReadingTime){
    const sum = previousReadingTime + parseInt(time)
    localStorage.setItem("readingTime",sum);
    setReadingTime(sum)
  }else{
    localStorage.setItem("readingTime",time);
    setReadingTime(time)
  }
 }
 

  return (
    <div className=''>
      <CollapsibleExample/>
     <div className='container main-container row m-auto mt-3'>
      <div className='home-container col-md-9'>
        <Home handleTime={handleTime}/>
      </div>
      <div className='home-container col-md-3'>
        <SideCart readingTime = {readingTime}/>
      </div>
     
     </div>
    </div>
  );
}

export default App;
