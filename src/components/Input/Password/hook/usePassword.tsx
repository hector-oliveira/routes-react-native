import { useState } from 'react';

export const usePassword = () => {
  const [ isPasswordVisible, setPasswordVisible ] = useState(true);

  const handlePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);
  
  return {
    isPasswordVisible,
    handlePasswordVisibility
  }
}