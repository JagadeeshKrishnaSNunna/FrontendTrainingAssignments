import { useState } from 'react';
import './Password.css'
import Rules from '../Rules/Rules'

function Password(){

    const [pass,setPass]=useState('')
    const [rePass,setRePass]=useState('')


    const passHandler=(e)=>{
        setPass(e.target.value);
        
    }
    const rePassHandler=(e)=>{
        setRePass(e.target.value);
    }

    return(
        <>
        <input type="password" value={pass} onChange={passHandler} id="pass" placeholder='Enter New Password'/>
        <input type="password" value={rePass} onChange={rePassHandler} id="pass" placeholder='Re-enter New Password'/>
        <Rules pass={pass}/>
        <div className='button'>Reset password</div>
        </>
    );
}


export default Password;