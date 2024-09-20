import React from 'react'
import Link from 'next/link'
const Header = () => {
 return (
    <div className='flex gap-8 p-7 bg-green-500'>
    <Link href="\">Dashboard</Link>
    <Link href="\faq">FAQ,S</Link>
    <Link href="\help">Help</Link>
    <Link href="\payment">Payment Proofs</Link>
   </div>
 )
}

export default Header