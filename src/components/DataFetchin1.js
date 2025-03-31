import React, {useState, useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    eror : '',
    post :{}
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
              loading: false,
              post: action.payload,
              error: "",
            };
        case 'FETCH_ERROR':
            return{
                loading:true,
                post:{},
                error:"Something went Wrong"

            }      
        default:
            return state   

    }
}

function DataFetchin1() {
    useReducer(reducer,initialState)
  return (
    <div>

    </div>
  )
}

export default DataFetchin1