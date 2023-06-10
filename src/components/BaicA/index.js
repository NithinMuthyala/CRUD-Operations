import { Component } from "react";
import axios from 'axios'

class BaicA extends Component{

    // componentDidMount(){
    //     console.log('Rahul')
    // }

    getData = async  () => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            console.log(response)
        })
    }

    render(){
        console.log('Rahul')
        return (
            <h1>Class Axios</h1>
        )
    }
}

export default BaicA