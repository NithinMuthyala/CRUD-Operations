
import axios from 'axios'

const Delete = async (id,getData) => {
    // const {id} =  props 
    console.log(id)
     const options = {
        headers:{
        
            'Authorization':"Bearer e59e722f76a2ae22d98e3468bec5206cde9048dd6242059b7e967fdb8c5b1441"},
            }
   const res = await axios.delete(`https://gorest.co.in/public/v2/users/${id}`,options)
   console.log(res)
   getData()
   

}

export default Delete