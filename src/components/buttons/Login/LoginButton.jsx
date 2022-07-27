import React from 'react';
import './loginbtn.scss';

function LoginBtn({ innerText }) {
  return <button type="submit" className="button login__button">{innerText}</button>;
}

export default LoginBtn;
