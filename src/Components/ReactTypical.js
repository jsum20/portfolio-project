import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Typical = () => (
    <>
    <ReactTypical
        steps={['Welcome to my portfolio!', 1000, 'I am Edmund', 1000 ,'An aspiring tech law graduate', 1000000000]}
        wrapper="p"
        loop={3}
    />
    </>
)

export default Typical;