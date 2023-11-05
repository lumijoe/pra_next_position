// componnts/footer.js

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const works = "/#works";

    return (
        <div className='bg-black w-[100%] h-[120px]'>
            <ul>
                <li><Link href="/" className='text-white'>HOME</Link></li>
                <li><Link href="/about" className='text-white'>ABOUT</Link></li>
                <li><Link href={works} className='text-white'>WORKS</Link></li>
                <li><Link href="/" className='text-white'>Github</Link></li>
                <li><Link href="/" className='text-white'>Vercel</Link></li>
            </ul>
            
            
        </div>
    )
}