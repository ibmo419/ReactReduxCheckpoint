import Task from './Task'
import { useSelector } from 'react-redux';
import {useState} from 'react'
 
function ListTask() {
    const todos = useSelector(state => state)
    const [filter, setFilter] = useState(false)
    
    return (
        
        <div className='my-4'>
        <button
        onClick={()=> setFilter(!filter)
        }
        > FilterDone</button>
        {filter?
        todos.filter(task=>task.done==true).map(task=>{
            return(
                <Task key={task.id} task={task}/>
            ) 
        }):
        todos.map(task=>{
            return(
                <Task key={task.id} task={task}/>
            ) 
        }

        )

        }
        </div>
    )
}

export default ListTask
