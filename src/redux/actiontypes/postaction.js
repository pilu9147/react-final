import { POSTFETCHING,POSTSUCCESS,POSTERROR,CLICKEDPOST } from "./posttype";

export const postfetching = ()=>{
     return {
        type : POSTFETCHING
     }
}
export const postsuccess = (data)=>{
     return {
        type : POSTSUCCESS,
        payload : data
        
     }
}
export const posterror = (error)=>{
     return {
        type : POSTERROR,
        payload : error
     }
}

export const getclicked = (id)=>{
    return {
        type : CLICKEDPOST,
        payload : id
    }
}


export const fetchpost = ()=>{
    return async function (dispatch) {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let response = await res.json()
            dispatch(postsuccess(response))
        }
        catch(e) {
            console.log(e);
            dispatch(posterror(e))
        }
    }
}