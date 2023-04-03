import React from 'react';
import eventdetails from '../Models/Events.json'

const Event = () => {
  return (
    <div>
      {eventdetails.Events.map((e)=>{
        return(
          <>
          <img src={e.ImagePath} alt={e.NameOfEvent}/>
          <div>{e.NameOfEvent}</div>
          <div>{e.Description}</div>
          <div>{e.TimeOfEvent}</div>
          <div>{e.Sponsers}</div>
          </>
        )
      })}
    </div>
  )
};

export default Event;
