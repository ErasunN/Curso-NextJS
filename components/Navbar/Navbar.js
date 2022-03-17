import React from 'react'
import Link from 'next/link'

import { ActiveLink } from '../ActiveLink/ActiveLink'

export const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around"
    }}>
        <ActiveLink text="Home" href="/">Home</ActiveLink>
        <ActiveLink text="About" href="/about">About</ActiveLink>
        <ActiveLink text="Contact" href="/contact">Contact</ActiveLink>
    </div>
  )
}
