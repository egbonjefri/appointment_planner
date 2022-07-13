
import './materialize.css'
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {objectAdder} from './features/counter/counterSlice';


export default function Contacts() {
const [name, setName] = useState([]);
const [num, setNum] = useState([]);
const [email, setEmail] = useState([]);
const dispatch = useDispatch();
const items = useSelector((state) => state.counter.items)


function handleClick(e) {
  e.preventDefault();
  const nameRegex = /^[a-z]+\s[a-z]+$/i;
  const numRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
   // eslint-disable-next-line
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const nameError = document.getElementsByClassName('error-text')[0];
  const numError = document.getElementsByClassName('error-text')[1];
  const emailError = document.getElementsByClassName('error-text')[2];
  const aname = document.getElementById('name');
   const anumber = document.getElementById('number');
   const aemail = document.getElementById('email');




  function errorChecker() {
    function nameChecker() { 
    if (nameRegex.test(name)) {
      nameError.style.display = 'none'
      aname.style.border = 'none'
      aname.style.borderBottom = 'solid 1px black'
      return true
    }
    else {
      nameError.style.display = 'block'
      aname.style.border = 'solid 2px red'
    }
  }
    function numChecker() {
    if (numRegex.test(num)) {
      numError.style.display = 'none';
      anumber.style.border = 'none';
      anumber.style.borderBottom = 'solid 1px black';
      return true
    }
    else {
      anumber.style.border = 'solid 2px red'
      numError.style.display = 'block'
    }
  }
  function emailChecker() {
    if (emailRegex.test(email)) {
      emailError.style.display = 'none';
      aemail.style.border = 'none';
      aemail.style.borderBottom = 'solid 1px black'
      return true
    }
    else {
      emailError.style.display = 'block'
      aemail.style.border = 'solid 2px red'
    }
  }
  if (nameChecker() && numChecker() && emailChecker()) {
    return true
  }
  else {
    return false
  }
  }


  if (errorChecker()) {
   
  let a = {
    name: name,
    email: email,
    number: num,
    key: num
}
  dispatch(objectAdder(a))
    const inputs = document.querySelectorAll('#name,#number,#email');
    inputs.forEach(input => {
      input.value = ''
    })
}
}
    return (
        <div className="row">
            <h5 className='center'><b>Add New Contact</b></h5>
        <form noValidate onSubmit={(e)=>handleClick(e)}  className="contact col s12">
          <div className="row">
            <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
              <input id='name' placeholder='Name:' onChange={(e)=> setName(e.target.value)} type="text"/>
      <p className="error-text" data-error="wrong" data-success="right">
        New Contacts Must Include First & Last Name</p>

            </div>
            <div className="input-field col s12">
            <i className="material-icons prefix">phone</i>
              <input id='number' placeholder='Number:' onChange={(e)=> setNum(e.target.value)} type="number"/>
              <p className="error-text" data-error="wrong" data-success="right">
        Must Include Valid Phone Number</p>
            </div>
            <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
              <input id='email' placeholder='Email:' onChange={(e)=> setEmail(e.target.value)} type="email"/>
              <p className="error-text" data-error="wrong" data-success="right">
       Email Address Must Be Valid</p>
            </div>
            <button className="btn myBtn waves-effect waves-light" type="submit" name="action">
    <i className="material-icons center">add</i>
  </button>
            </div>
            </form>
        <div className='contact-cta center'>
            {items.length > 0 && <h5><b>Contact List</b></h5>}
            <div>{items.map(item=>{
    return(<div className='contacts' key={item.key}>
        <p><b>{item.name}</b></p>
        <p>{item.email}</p>
        <p>{item.number}</p>
        </div>)
})}</div>
        </div>
            </div>
    )
}