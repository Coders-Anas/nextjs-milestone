import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='py-2 px-12 flex justify-between'>
      <h1 className='uppercase text-2xl font-black text-teal-900'>Muhammad Anas</h1>
      <nav>
        <Link className='uppercase btn btn-link link-accent' href={"/"}>Home</Link>
        <Link className='uppercase btn btn-link link-accent' href={"/about"}>About</Link>
        <Link className='uppercase btn btn-link link-accent' href={"/contact"}>Contact</Link>
        <Link className='uppercase btn btn-link link-accent' href={"/projects"}>Projects</Link>
      </nav>
    </div>
    </>
  )
}
