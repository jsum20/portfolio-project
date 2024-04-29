import React, {useState, useEffect} from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Typical = () => {
   
    return (
       <>
        <ReactTypical
            steps={['Welcome to my portfolio!']}
            wrapper="p"
            loop={1}
            onComplete={() =>"hello"}
        />
       </>
    );
   };

export default Typical;