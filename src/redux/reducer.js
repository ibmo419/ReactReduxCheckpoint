import {ADD_TODO,DELETE_TODO,UPDATE_TODO,UPDATE_DONE} from './actions'
import {todos} from './states'

export let reducer=(state=todos,action)=>{
    let newTodos;
    let index=-1;
    switch(action.type){
        case ADD_TODO:
            newTodos=[...state,action.payload];
            return newTodos;
        case DELETE_TODO:
            newTodos=[...state];
            newTodos=newTodos.filter(todo=>todo.id!=action.payload)
            return newTodos;
        case UPDATE_TODO:
            newTodos=[...state];
            for(let i=0 ;i < newTodos.length ; i++){
                index++;
                if(newTodos[i].id=action.payload.id){
                    break;
                }
                }
            if(index!=-1){
                newTodos[index]=action.payload;
                return newTodos
            }
        // case UPDATE_DONE:
        //  newTodos=[...state];
        //     for(let i=0 ;i < newTodos.length ; i++){
        //         index++;
        //         if(newTodos[i].id=action.payload.id){
        //             break;
        //         }
        //         }
        //     if(index!=-1){
        //         newTodos[index]=action.payload;
        //         return newTodos
        //     }

    }
    return state;
}