import * as React from 'react'
import Link from 'next/link'

export const Nav: React.FunctionComponent = props =>
  <nav className="navbar">
    <Link href="/">
      <h4 className="navbar__brand-logo">
        Utilitarian
      </h4>
    </Link>
    <div className="navbar__link-spacer"></div>
    <ul className="navbar__links">
     
    </ul>
  </nav>
