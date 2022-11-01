import React, {useState} from 'react'
import UserInfoForm from '../components/UserInfoForm/UserInfoForm';
import UserSignupForm from '../components/UserSignupForm/UserSignupForm'


const Register = () => {

const [info, setInfo] = useState({FirstName: "", LastName: "", Age: "", Email: "", PassWord: ""});
const [success, setSuccess] = useState(false);


function handleSubmit (e) {
        e.preventDefault();
        // console.log(e.target)
         setInfo({FirstName: e.target[0].value, LastName: e.target[1].value, Age: e.target[2].value, Email: e.target[3].value, PassWord: e.target[4].value})
         setSuccess(true);
    }    



  return (
    <div>  
        {success ? <UserInfoForm /> : <UserSignupForm handleSubmit={handleSubmit}/>}
    </div>
  )
}

export default Register

