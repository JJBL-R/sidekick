import React from 'react';
import { GoogleLogin } from 'react-google-login';
import UserContext from '../../app/UserContext.tsx';
import { useContext } from 'react';

const clientId = "600150108739-1hcnbkbmbctp79as2rjbk689efsh1mjb.apps.googleusercontent.com"

const Google = () => {
  const { user, setUser } = useContext(UserContext)
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    setUser(res.profileObj);
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res)
  }
  
  return (
    <div className="loginBtn loginBtn--google">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default Google;
