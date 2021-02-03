import {useState, useEffect} from 'react'

const useForm =(callback1,validate) =>{
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

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
        setErrors(validate(values))
        setIsSubmit(true)
    }
    console.log(Object.keys(errors));

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmit){
            callback1();
        }
    },[errors])
    return {handleChange,handleSubmit, values, errors}
}






export default useForm