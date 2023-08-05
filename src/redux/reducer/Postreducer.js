import { POSTFETCHING,POSTSUCCESS,POSTERROR,CLICKEDPOST} from "../actiontypes/posttype"


const initialstate = {
    loading : true,
    postdata : [],
    error : null,
    curr : null
}

const Postreducer = (state = initialstate,action)=>{
switch(action.type) {
    case POSTFETCHING : 
           return {...state,loading:true}
    case POSTSUCCESS : 
          return {...state,loading:false,postdata:action.payload,error: null}
    case POSTERROR : 
          return {...state,loading:false,postdata:[],error: action.payload}
    case CLICKEDPOST : 
          return {...state,curr:action.payload}
    default :
         return state
}
}

export default Postreducer