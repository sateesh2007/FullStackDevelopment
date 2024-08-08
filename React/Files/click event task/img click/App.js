import React from 'react';
import { useState } from 'react';

import pic from './images/background.jpg'
import pic1 from './images/msd 1.jpg'
    
export default function App(){
    const [state , setstate] = useState( <img src={pic} alt=''/>)

    const handler=()=>{
        setstate(<img src={pic1} alt=''/>)
        }


    return (
        <>
        <h3>{state}</h3>
            <button onClick={handler}>Click Here</button>
        </>
         )
        }

