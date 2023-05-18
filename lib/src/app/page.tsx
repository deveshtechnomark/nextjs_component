"use client"

import Input from 'custom-lib';
import "custom-lib/src/styles.css"

export default function Home() {

  const getData = (fieldName: any, value: any) => {
    console.log(`Field ${fieldName} value:`, value);
  };


  return (
    <>
      <div className='flex-container'>
        <div className="card">

          <div className="container">
            
            <label htmlFor='id'>Username</label>
            <Input type="text" id="username" name="name" placeholder="Username" size="md" className="abc" minLength="3" maxLength="10" validation required variant="standard" onChange={getData} /><br></br>

            <label htmlFor='email'>Email</label>
            <Input type="email" placeholder="Enter email" id="email" size="md" validation variant="outlined" onChange={getData} /><br></br>

            <label htmlFor='password'>Password</label>
            <Input type="password" placeholder="Enter password" id="password" size="md" validation variant="filled" onChange={getData} /><br></br>
          </div>
        </div>
      </div>



      {/* <Input type="file" label="File: " size="md" accept="*"  validation /><br></br>
      <Input type="checkbox"  label="Checkbox: " /><br></br>  
      <Input type="date"  label="Date of birth: "  validation/><br></br>  
      <Input type="number"  label="Number: " min="10" max="12"/><br></br>  
      <Input type="button"  label="Submit "  value="Submit"/><br></br> 
      <Input type="radio"  label="Radio: " /><br></br>
      <Input type="hidden" id="id" name="name"  value="value" label="Hidden: "/><br></br>
      <Input type="time"  label="Time: " /><br></br>
      <Input type="datetime-local"  label="Date time: " /><br></br>
      <Input type="range"  label="Range: " /><br></br>
      <Input type="week"  label="Week: " /><br></br>
      <Input type="search"  label="Search: " /><br></br> */}

    </>
  )
}