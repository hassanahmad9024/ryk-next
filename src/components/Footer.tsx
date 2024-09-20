import react from 'react'
import Link from 'next/link'
const Footer = () => {
 return (
    
<div className='flex gap-6 p-7'>
    <Link href="/privacy">Privacy Policy</Link>
    <Link href="/terms">Terms</Link>
    <Link href="/about">About Us</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <p> 2024 Copyright all rights Reserved </p>
    </div>

    
)
}

export default Footer