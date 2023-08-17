import { useState,useContext } from "react"
import {signInWithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailandPassword} from '../../utils/firebase/firebase.utils'
import FormInput from "../form/formInput.component"
import Button from "../Button/Button.component"
import "../SignIn/signIn.style.scss"
import { UserContext } from "../../contexts/usercontext"
const defaultFormFields=
{
    email:'',
    password:'',
}
const SignIn=()=>
{
    const [formFields,setFormFields]= useState(defaultFormFields);
    const {email,password}=formFields;
    const {setCurretUser}= useContext(UserContext)
    console.log(formFields)
    const changeHandler=(event)=>
    {
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})

    }
    const SubmitHandeler=async (event)=>
    {
        event.preventDefault();
        try {
            const {user}= await signInAuthUserWithEmailandPassword(email,password)
            setCurretUser(user)
        } catch (error) {
       
        }

    }
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
      };
    return(
        <div className="sign-In-container">
            <h2>Don't have an Account</h2>
            <span>Sign Up to Capstone</span>
            <form onSubmit={SubmitHandeler}>

                <FormInput required label="Email"type="email" name="email" value={email} onChange={changeHandler}/>

                <FormInput required label="Password" type="password" name="password"value={password} onChange={changeHandler}/>
                <div className="Button-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType='google' onclick={logGoogleUser}>Google Sign In </Button>
                </div>
            </form>
        </div>
    )
}
export default SignIn