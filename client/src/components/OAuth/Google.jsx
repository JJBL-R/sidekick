import React from 'react';
import { GoogleLogin } from 'react-google-login';
import UserContext from '../../app/UserContext.tsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './OAuth.scss';

const clientId =
  '600150108739-1hcnbkbmbctp79as2rjbk689efsh1mjb.apps.googleusercontent.com';

const Google = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const onSuccess = async (res) => {
    console.log('LOGIN SUCCESS! Current user: ', res.profileObj);
    await setUser(res.profileObj);
    navigate('/sidekick');
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED! res: ', res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      render={(renderProps) => (
        <button
          className="loginBtn loginBtn--google"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Login with Google
        </button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
};

export default Google;
