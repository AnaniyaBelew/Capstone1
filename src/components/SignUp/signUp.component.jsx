import { useState} from "react"
import {createAuthUserWithEmailandPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from "../form/formInput.component"
import Button from "../Button/Button.component"

import "../SignUp/signUp.style.scss"
const defaultFormFields=
{
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUp=()=>
{
    const [formFields,setFormFields]= useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}=formFields;
    const changeHandler=(event)=>
    {
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})

    }
    const submitHandeler=async (event)=>
    {
        event.preventDefault();
        if(password !== confirmPassword)
        {
            alert("Password don't match");
            return
        }    

        try {
            const {user}= await createAuthUserWithEmailandPassword(email,password);
            setCurretUser(user)
            console.log(user)
            await createUserDocumentFromAuth(user,{displayName})
            
        } catch (error) {
        if(error.code==='auth/email-already-in-use')
        {
            alert("This email is in use")
        }else{
        console.log('error creating the user', error);}
        }

    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an Account</h2>
            <span>Sign Up to Capstone</span>
            <form onSubmit={submitHandeler}>
                <FormInput required label="Name"type="text" name="displayName" value={displayName} onChange={changeHandler}/ >

                <FormInput required label="Email"type="email" name="email" value={email} onChange={changeHandler}/>

                <FormInput required label="Password" type="password" name="password"value={password} onChange={changeHandler}/>

                <FormInput required label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
export default SignUp