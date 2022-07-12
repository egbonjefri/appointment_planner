import React, { useState } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import {apptAdder} from './features/counter/counterSlice';

import { useNavigate } from "react-router-dom";

export default function Appointments() {
  const items = useSelector((state) => state.counter.items);
  const appts = useSelector((state) => state.counter.appointments);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState([]);
  const [contact, setContact] = useState([])
  const [value, setValue] = useState(new Date());
    function handleSubmit(e) {
        e.preventDefault();
        const nameError = document.getElementsByClassName('error-text')[0];

        function errorChecker(){
           if (typeof title === 'object') {
               nameError.style.display = 'block';
           }
 
           else {
            nameError.style.display = 'none';
            return true
           }
        }
        if (errorChecker()) {
        let a = {
            title: title,
            date: value.toString(),
            contact: contact,
            key: title[0]
        }
          dispatch(apptAdder(a))
            const inputs = document.querySelectorAll('#name,#number');
            inputs.forEach(input => {
              input.value = ''
            }) 
        }
    }
    return (
        <div className='appt row'>
            <h5 className='center'><b>Add New Appointment</b></h5>
        <form onSubmit={(e)=> handleSubmit(e)} noValidate className='col s12'>
        <div className="row">
            <div className="input-field col s12">
              <input onChange={(e)=> setTitle(e.target.value)} id='name' placeholder='Appointment Title:'type="text"/>
      <p className="error-text" data-error="wrong" data-success="right">
       Appointments Must Have a Valid Title</p>
        </div>
        <div className="input-field col s12">
        <p onClick={()=> navigate('/contacts')} className='new'>Add New Contact</p> <i  className="material-icons prefix">add</i>

    <select id='number' onChange={(e)=>setContact(e.target.value)} className="browser-default">
    <option value="" disabled selected >Select Contact</option>

    {items.map((item) => {
        return(
            <option value={item.name} key={item.key}>{item.name}</option>
        )
    })}
   
  </select>
 
</div>

   <div className='date'>
       
   <DateTimePicker onChange={(value)=> setValue(value)} className='now' value={value} />
       </div>   
    </div>
    <button className="btn bat myBtn waves-effect waves-light" type="submit" name="action">
    <i className="material-icons center">add</i>
  </button>
        </form>
    <div className='appt-cta'>
        {appts.length > 0 && <h5 className='center'><b>Appointments</b></h5>}
        <div>{appts.map(item=>{
    return(<div className='appointments' key={item.key}>
        <p><b>{item.title}</b></p>
        <p>{item.contact}</p>
        <p>{item.date}</p>
        </div>)
})}
</div>
    </div>
        </div>
    )
}