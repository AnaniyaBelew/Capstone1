import { useState } from "react"
import {createAuthUserWithEmailandPassword} from '../../utils/firebase/firebase.utils'
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
    const changeHandler=(event)=>
    {
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})

    }
    const submitHandeler=async (event)=>
    {
        event.preventDefault();
        if(password != confirmPassword)
        {
            alert("Password don't match");
            return
        }    

        try {
            const response= await createAuthUserWithEmailandPassword(email,password);
            console.log(response)
            
        } catch (error) {
        console.log('error creating the user', error);
        }

    }
    return(
        <div>
            <h1>Sign Up to Capstone</h1>
            <form onSubmit={submitHandeler}>
                <label>Name</label>
                <input required type="text" name="Accname" value={Accname} onChange={changeHandler}/ >

                <label>Email</label>
                <input required type="email" name="email" value={email} onChange={changeHandler}/>

                <label>Password</label>
                <input required type="password" name="password"value={password} onChange={changeHandler}/>

                <label>Confirm Password</label>
                <input required type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignUp