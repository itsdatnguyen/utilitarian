import * as React from 'react'
import Link from 'next/link'

export const Nav: React.FunctionComponent = props =>
  <nav className="navbar">
    <h4 className="navbar__brand-logo">
      Utilitarian
    </h4>
    <div className="navbar__link-spacer"></div>
    <ul className="navbar__links">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/SSR">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/StyledJsx">
          <a>Styled Jsx</a>
        </Link>
      </li>
      <li>
        <Link href="/ModuleCss">
          <a>Module CSS</a>
        </Link>
      </li>
    </ul>
  </nav>
