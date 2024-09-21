import React from 'react'
import Link from 'next/link'
const Footer = () => {
 return (
    
<div className='flex gap-6 p-7'>
    <Link href="/privacy">Privacy Policy</Link>
    <Link href="/terms">Terms</Link>
    <Link href="/about">About Us</Link>
    </div> 
)
}

export default Footer