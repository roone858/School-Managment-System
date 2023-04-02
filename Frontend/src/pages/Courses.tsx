import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addStudent } from "../store/actions/studentActions";

export const Courses  = () => {

  const dispatch = useDispatch()
  const student= {id:1,firstName:"Ali",lastName:"Gamal"}

  return (
    <div className='home-section'>
      <button onClick={ ()=> dispatch(addStudent([student]))} >add student</button>
      
    </div>
  )
}
