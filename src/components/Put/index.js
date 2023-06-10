import axios from 'axios'
import Context from '../Context'

const Put = async (getData,data,urlid) => {
//    console.log(`https://gorest.co.in/public/v2/users/${urlid}`)
    const options = {
        method:'PUT',
        headers:{
            "Content-Type":'Application/Json',
            'Authorization':"Bearer e59e722f76a2ae22d98e3468bec5206cde9048dd6242059b7e967fdb8c5b1441"},
        body:JSON.stringify(data)
            }
    const response = await axios.put(`https://gorest.co.in/public/v2/users/${urlid}`,JSON.stringify(data),options)

    // const response = await fetch(`https://gorest.co.in/public/v2/users/${urlid}`,options)
    
    console.log(response)
    getData()

    // return <Context.Consumer>
    //     {
    //         values => {

    //         }
    //     }
    // </Context.Consumer>

}

export default Put