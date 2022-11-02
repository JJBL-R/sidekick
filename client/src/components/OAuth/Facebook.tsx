import React from 'react';
import './OAuth.scss';

const Facebook = () => {
  const handleClick = () => {
    fetch('/auth/facebook/login')
      .then((resp) => console.log(resp))
      .then((data) => console.log(data));
  };
  return (
    <button onClick={handleClick} className="loginBtn loginBtn--facebook">
      Login with Facebook
    </button>
  );
};

export default Facebook;
