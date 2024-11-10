import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
<div className="navbar">
  <h1 className="navbar__brand">Brand Name</h1>
  <nav>
    <Link className="navbar__link" href="/">Home</Link>
    <Link className="navbar__link" href="/about">About</Link>
    <Link className="navbar__link" href="/contact">Contact</Link>
    <Link className="navbar__link" href="/faq">FAQ</Link>
    <Link className="navbar__link navbar__link--primary" href="#">Login</Link>
  </nav>
</div>

    </>
  )
}
