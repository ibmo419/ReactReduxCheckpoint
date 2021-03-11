import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo, updateDone } from '../redux/actions';
import {v1 as uuid} from 'uuid'


function Task({task}) {
    
    let dispatch = useDispatch();
    const [done, setDone] = useState(false)
    const [edit, setEdit] = useState(false)
    const [description, setDescription] = useState('')
    return (
        <div>
            <div className='row mx-2 align-items-center'>
                <div>{task.id.length>1?task.id[2]:task.id}</div>
                <div className='col'>
                    <h4>{edit?
                    <input 
                    onChange={(e)=>
                        setDescription(e.target.value)
                    }
                    type='text' value={description} className='form-control'/>
                    :task.description}</h4>
                </div>
                <button
                onClick={()=>{
                    dispatch(updateTodo(
                        {
                            ...task,
                            description:description
                        }
                    ))
                    if(edit){
                        setDescription(task.description)
                    }
                    setEdit(!edit)
                }
                }
                className='btn btn-primary m-2'
                >{edit?'Update':'Edit'}</button>
                <button
                onClick={()=>dispatch(deleteTodo(task.id))}
                className='btn btn-danger m-2'
                >Delete</button>
                <button 
                onClick={()=>{
                    dispatch(updateDone(task.id))
                    setDone(!done)
                }
                }
                className='btn btn-primary m-2'
                >{done?'Done':'notDone'}</button>
            </div>
        </div>
    )
}

export default Task
