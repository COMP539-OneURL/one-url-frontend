import React, { useState, useEffect } from "react";
import '../App.css';
import { Link } from "react-router-dom";
//import '../App.css';

const HeaderBar = () => {
  const [current, setCurrent] = useState({key: window.location.pathname});
  const [isLogInHoverText, setIsLogInHoverText] = useState(false);
  const [isSignUpHoverText, setIsSignUpHoverText] = useState(false);

  // useEffect(()=>{
  //   if(current !== window.location.pathname) {
  //     setCurrent({key: window.location.pathname})
  //   }
  // }, [current])

  const loginClick = () => {
    setCurrent({key: 'login'})
  }

  const signUpClick = () => {
    setCurrent({key: 'signup'})
  }

  const businessPlanClick = () => {

  }

  const mouseInLoginTextColor = () => {
    setIsLogInHoverText(true)
  }

  const mouseOutLoginTextColor = () => {
    setIsLogInHoverText(false)
  }


  const mouseInSignUpTextColor = () => {
    setIsSignUpHoverText(true)
  }

  const mouseOutSingUpTextColor = () => {
    setIsSignUpHoverText(false)
  }


  return (
    <div className="site-layout">
      <div style={{ display: 'flex', paddingLeft: 50, paddingRight: 50, alignItems: 'center' }}>
        <div style={{ fontSize: 64, fontWeight: 'bold' }}>OneURL</div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', fontSize: 24 }}>
          <Link to="/login">
            <div className="auth-link" style={{ paddingRight: 20, color: isLogInHoverText ? 'black' : 'white', cursor: 'pointer' }}
              onClick={loginClick}
              onMouseEnter={mouseInLoginTextColor}
              onMouseLeave={mouseOutLoginTextColor}
            >
              Log in {current.key === 'login' && <div style={{ width: '100%', height: '2px', background: 'black' }}></div>}
            </div>
          </Link>
          <Link to="/signup">
            <div className='authLink' style={{ paddingRight: 20, color: isSignUpHoverText ? 'black' : 'white', cursor: 'pointer' }} 
              onClick={signUpClick}
              onMouseEnter={mouseInSignUpTextColor}
              onMouseLeave={mouseOutSingUpTextColor}
            >
              Sign up {current.key === 'signup' && <div style={{ width: '100%', height: '2px', background: 'black' }}></div>}
            </div>
          </Link>
          <Link to="/signup">
            <div style={{ paddingRight: 20, paddingLeft: 20, color: 'black', cursor: 'pointer', background: 'white', borderRadius: '0.5rem' }} onClick={businessPlanClick}>
              Business Plan
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderBar;