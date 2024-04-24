import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Typical = () => (
    <>
    <ReactTypical
        steps={['Welcome to my portfolio!', 1000, 'I am Jason', 1000 ,'A software engineer based in London, UK.', 1000000000]}
        wrapper="p"
        loop={3}
    />
    </>
)

export default Typical;