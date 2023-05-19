"use client"

import Input from "custom-lib";
import "custom-lib/dist/index.css";
import "./page.css";

export default function Home() {

  var data: {};

  const getData = (fieldName: any, value: any) => {
    console.log(`Field ${fieldName} value:`, value);
    data = {
      ...data,
      [fieldName]: value
    }
  };

  const handleClick = () => {
    console.log(data)
  }

  return (
    <>
      <div className='login-container'>

        <form className='form'>

          <h3 className='title'>Sign In</h3>

          <label htmlFor='email'>Email<span className='err'>*</span></label>
          <Input type="email" placeholder="Enter email" id="email" name="email" size="lg" validation onChange={getData} /><br></br>

          <label htmlFor='password'>Password<span className='err'>*</span></label>
          <Input type="password" placeholder="Enter password" id="password" name="password" size="lg" validation onChange={getData} /><br></br>

          <div className='checkbox-div'>
            <input type="checkbox" />
            <span className='checkbox-text'> Keep me logged in<span />
              <span className='forgot-pass'>Forgot Password?</span>
            </span>
          </div>

          <Input type="submit" className="btn" value="SIGN IN" onClick={handleClick} />
          <div className="horizontal-line">
            <span className="center-text">or Continue with</span>
          </div>

          <div className="logos-div">
            <span> <a href="https://accounts.google.com/login"><img className='logos' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png' alt="google"></img></a> </span>
            <span><a href="https://appleid.apple.com/"><img className='logos' src='https://static.vecteezy.com/system/resources/previews/012/871/451/non_2x/apple-brand-icon-illustration-top-tech-company-logotype-free-png.png'></img></a> </span>
            <span><a href="https://c23.qbo.intuit.com/"><img className='logos' src='https://www.intuit.com/oidam/intuit/ic/en_us/logos/qb-icon-1-icom.png'></img> </a></span>
            <span><a href="https://login.xero.com/"><img className='logos' src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Xero_software_logo.svg/2048px-Xero_software_logo.svg.png'></img> </a></span>
          </div>

          <div className='sign-up-text'>
            <span className='checkbox-text'>Already have an account? <span className='signUp'>Sign Up</span></span>
          </div>

        </form>

      </div>
    </>
  )
}