import React, { useEffect, useState } from 'react';

const SideCart = ({readingTime}) => {
    const [time,setTime]=useState(readingTime)
    // console.log(readingTime);
    useEffect(()=>{
        const getTotalTime = localStorage.getItem("readingTime");
        setTime(getTotalTime);
    },[readingTime])
    return (
        <div className='mt-4'>
            <div className='card p-4'>
                <h6>Spent time on read : {time} min</h6>
            </div>
            <div className='card p-4 mt-2'>
                <h6>Bookmarked Blogs : 8</h6>
            </div>
        </div>
    );
};

export default SideCart;