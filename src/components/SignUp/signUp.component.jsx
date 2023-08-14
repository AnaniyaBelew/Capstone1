import { useState } from "react"
const defaultFormFields=
{
    Accname:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUp=()=>
{
    const [formFields,setFormFields]= useState(defaultFormFields);
    const {Accname,email,password,confirmPassword}=formFields;
    console.log(formFields)
    const changeHandler=(event)=>
    {
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})

    }
    return(
        <div>
            <h1>Sign Up to Capstone</h1>
            <form>
                <label>Name</label>
                <input required type="text" name="Accname" value={Accname} onChange={changeHandler}/ >

                <label>Email</label>
                <input required type="email" name="email" value={email} onChange={changeHandler}/>

                <label>Password</label>
                <input required type="password" name="password"value={password} onChange={changeHandler}/>

                <label>Confirm Password</label>
                <input required type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>
            </form>
        </div>
    )
}
export default SignUp