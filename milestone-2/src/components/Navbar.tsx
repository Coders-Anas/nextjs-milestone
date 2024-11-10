import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='py-2 px-12 flex justify-between'>
      <h1 className='uppercase text-2xl font-black text-teal-900'>Brand Name</h1>
      <nav>
        <Link className='uppercase btn btn-link link-accent' href={"#"}>Home</Link>
        <Link className='uppercase btn btn-link link-accent' href={"#"}>About</Link>
        <Link className='uppercase btn btn-link link-accent' href={"#"}>Contact</Link>
        <Link className='uppercase btn btn-link link-accent' href={"#"}>FAQ</Link>
        <Link className='uppercase btn btn-accent' href={"#"}>Login</Link>
      </nav>
    </div>
    </>
  )
}