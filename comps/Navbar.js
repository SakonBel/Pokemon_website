import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h1>Pokemon</h1>
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/List">List</Link></li>
                    <li><Link href="/About">About</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar