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
     <div >
      <div >
        <Home readingTime = {readingTime} handleTime={handleTime}/>
      </div>
      
     
     </div>
    </div>
  );
}

export default App;
