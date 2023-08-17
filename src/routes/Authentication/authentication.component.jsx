import SignIn from '../../components/SignIn/signIn.component';
import SignUp from '../../components/SignUp/signUp.component';
import "../Authentication/Auth.style.scss"
const Authentication = () => {
  return (
    <div className='Auth-container'>
      <SignIn/>
      <SignUp/>
    </div>
  );
};

export default Authentication;
