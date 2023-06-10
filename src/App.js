import {useState,useEffect} from 'react'
import axios from 'axios'
import {RotatingLines} from 'react-loader-spinner'
import Data from './components/Data/Data'
import Context from './components/Context'
import './App.css'
import DetailsForm from './components/DetailsForm'
import Put from './components/Put'

const App = () => {
  const [data,setData] = useState('')
  const [status,setStatus] = useState('')
  const [opstatus,setopstatus] =useState('POST')
  const [id,setid] = useState('')
  const getData = async () => {
    const options = {
      headers:{Authorization:'Bearer e59e722f76a2ae22d98e3468bec5206cde9048dd6242059b7e967fdb8c5b1441'}
    }
    const response = await axios.get('https://gorest.co.in/public/v2/users',options)
    // console.log(response)
    setData(response.data)
    setStatus('Success')
    
  }

  const loaderfun = () => {
    return (<div>
    <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
  </div>)
  }

  const successFun = () => {
    return (
      <table className='table-tag'>
      <thead>
        <tr>
        <th>id</th>
        <th className='th'>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Status</th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
      </thead>
      
        <tbody>
           
          {data.map(eachItem => (
            <Data key = {eachItem.id} eachItem =  {eachItem} operData = {operData} getData = {getData}/>
          ))}
        </tbody>
        </table>
        // <h1>Success</h1>
    )
  }

  const getDatafromSrc =() => {
    switch(status){
      case 'Progress':
        return loaderfun()
      case 'Success':
        return successFun()
      default :
      return null
    }
  }

  useEffect(() =>{
    setStatus('Progress')
    getData()
  },[])
  
  const operData = (Id) => {
    setopstatus('PUT')
    setid(Id)
    
  }
 
//  console.log(data)
  return (
    <Context.Provider value = {{getData:getData,Operation:opstatus,urlid:id}}>
    <div className = "main-container">
      <DetailsForm/>
    <div className = 'app-container'>
    <h1>Users Details</h1>
    
    {getDatafromSrc()}
    </div>
    </div>
    </Context.Provider>
  )
}

export default App