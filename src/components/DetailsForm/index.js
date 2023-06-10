import {useState} from 'react'
import Context from '../Context'
import Post from '../Post'
import Put from '../Put'
import './index.css'
const DetailsForm = () => {

    
    const [data,setData] = useState({name:'',email:"",gender:"",status:""})
    // const [reqStatus,setreqStatus] = useState('false')

    return (
        <Context.Consumer>  
        {
            values => {
                const {getData,Operation,urlid} = values
            //    console.log(values)
                const dataSubmit = async (event) => {
                    event.preventDefault()
                    // console.log('Trigerring')
                    setData(data)
                    {Operation === 'PUT'? Put(getData,data,urlid): Post(getData,data)}
                    // {Post(getData,data)}
                }   
                // const dataUpdate = (e) => {
                //     console.log('uppdatet')
                //         e.preventDefault()
                //         setData(data)
                //         {Put(data)}
                // }

            return  <div className='post-main-container'>
            <h1 className='crud-heading'>CRUD OPERATIONS</h1>
         <form className='form-container'>
            <div className = 'name-input-container'>
                <label className ='label-text' htmlFor = "fname">NAME</label>
                <input  placeholder = "First Name" className = 'input-tag' type = "text" id = 'fname' onChange={(e) => setData({...data,name:e.target.value})} />
            </div>
            <div className = 'name-input-container'>
                <label className ='label-text' htmlFor = "email">E MAIl</label>
                <input  placeholder = "E Mail" className = 'input-tag' type = "email" id = 'email' onChange={(e) => setData({...data,email:e.target.value})} />
            </div>
            <div className='radio-container'>
                <input type = "radio" name = 'gender' value = "male" onChange={(e) => setData({...data,gender:e.target.value})}/>
                <label  className='radio-text'>male</label>
            </div>
            <div className='radio-container'>
                <input type = "radio" name = 'gender' value = "female" onChange={(e) => setData({...data,gender:e.target.value})} />
                <label  className='radio-text'>female</label>
            </div>
            <select className='select-tag' onChange={(e) => setData({...data,status:e.target.value})}>
                <option value = "none">None</option>
                <option value = "Active">Active</option>
                <option value = "InActive">InActive</option>
            </select>
            <button onClick ={dataSubmit}>{Operation === 'PUT' ? 'Update': 'Submit'}</button>
            {/* <button onClick ={dataSubmit}>Submit </button> */}
         </form>
        </div>
            }
        }     
   
        </Context.Consumer>           
               
        
        
    )
}

export default DetailsForm