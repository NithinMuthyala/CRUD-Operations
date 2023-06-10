import axios from 'axios'

const Post = async (getData,data) => {
    
    const options = {
        headers:{
            "Content-Type":'Application/Json',
            'Authorization':"Bearer e59e722f76a2ae22d98e3468bec5206cde9048dd6242059b7e967fdb8c5b1441"},
            }
    // console.log(JSON.stringify(data))
    const response = await axios.post('https://gorest.co.in/public/v2/users',JSON.stringify(data),options)
    console.log(response)
    getData()
}

   
    


export default Post