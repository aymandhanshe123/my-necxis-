import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

export default function Home() {
  const handleLoginSuccess = (response) => {
    console.log('Google Sign-In successful:', response);
  };

  const handleLoginFailure = (error) => {
    console.log('Google Sign-In failed:', error);
  };

  return (
    <div>
      <h1>Google Sign-In Example</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        useOneTap
      />
    </div>
  );
}
