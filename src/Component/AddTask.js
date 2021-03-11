import React from 'react'
import { addTodo } from '../redux/actions';
import {useState} from 'react'
import {v1 as uuid} from 'uuid'
import {useDispatch} from 'react-redux'

function AddTask() {
    let [description,setDescription]=useState();
    let dispatch = useDispatch()
    return (
        <div>
            <div className='row m-2'>
            <input 
            onChange={(e)=>setDescription(e.target.value)}
            type='text' 
            value={description}
            className='col form-control'/>
            <button 
            onClick={()=>{
            dispatch(addTodo(
            {
             id:uuid(),
             description: description,
             done:false
            }));
            setDescription('');
            }
            }
            className='btn btn-primary mx-2'>
                ADD
            </button>
            </div>
        </div>
    )
}

export default AddTask
