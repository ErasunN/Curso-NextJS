import React from 'react'
import Link from 'next/link'

import { ActiveLink } from '../ActiveLink/ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around"
    }}>
      {menuItems.map((item, index) => 
        <ActiveLink key={index} text={item.text} href={item.href}>{item.text}</ActiveLink>
      )}
    </div>
  )
}
