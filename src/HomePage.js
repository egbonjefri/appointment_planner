import {  useNavigate } from 'react-router-dom'

import './materialize.css'


export default function Homepage () {
    const navigate = useNavigate()
    return (
        <p className='center'>No Appointments yet, create <span onClick={()=>navigate('/appointments')}>one</span> now.</p>
    )
}