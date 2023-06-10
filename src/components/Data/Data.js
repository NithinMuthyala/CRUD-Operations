import {useState} from 'react'
import Delete from '../Delete'
import './Data.css'

import DetailsForm from '../DetailsForm'


const Data = (props) => {
    const [status,setStatus] = useState('')
    const {eachItem,getData,operData} = props
   
    const{id} = eachItem
    const updateBtn = () => {
    //    console.log('onclickk')
       operData(id)
        
    }

    const deleteBtn =  () => {
        // console.log(id)
   
        {Delete(id,getData)}
        

    }

    
    return (
        
        <tr>
        <td>{eachItem.id}</td>
        <td>{eachItem.name}</td>
        <td>{eachItem.email}</td>
        <td>{eachItem.gender}</td>                 
        <td>{eachItem.status}</td>
        <td><button onClick = {updateBtn}>Update</button></td>
        <td><button onClick = {deleteBtn}>Delete</button></td>
        </tr>
       
    )
     
}

export default Data