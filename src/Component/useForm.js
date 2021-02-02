import {useState, useEffect} from 'react'

const useForm =() =>{
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const [errors, setErrors] = useState({})

    const handleChange =(e)=>{

        const {name, value} = e.target
        setValues({
            ...values,
            // [e.target.name]: e.target.value
            [name]: value
        })
        
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
    }

    return {handleChange,handleSubmit, values}
}

export default useForm