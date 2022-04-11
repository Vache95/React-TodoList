export function todoReduser(state=[],action){
    if(action.type === 'delet'){
     return state.filter(elem=>elem.id !== action.payload.id)
    }else if(action.type === 'push'){
      return [
        {
         id:Math.random(),
         text:action.payload.text
        },
        ...state
      ]
    }else if(action.type === 'clear'){
      return action.payload.state
    }else if(action.type === 'chek'){
       return state.filter(elem=>{
         if(elem.id === action.payload.id){
           elem.check=true
           return state
         }
         return state
       })
    }
    return state
  }
  


export const todoiniteial = [
    {
     id:Math.random(),
     text:'HTML',
     check:false
    },
    {
     id:Math.random(),
     text:'CSS',
     check:false
    },
    {
     id:Math.random(),
     text:'JAVASCRIPT',
     check:false
    },
   ]