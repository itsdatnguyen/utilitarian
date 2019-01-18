import * as React from 'react'
import Link from 'next/link'

export interface NavigationItem {
  url: string
  name: string
}

export const NavigationItems: NavigationItem[] = [
  { name: 'C# To Typescript', url: '/CSharpToTypescript' },
  { name: 'GUID Generator', url: '/GUIDGenerator' },
  { name: 'Lorem Ipsum Generator', url: 'LoremIpsumGenerator' }
]

export const SidenavItems: React.FunctionComponent = props =>
  <div>
    <ul className="sidenav-items">
      {NavigationItems.map(n =>
        <Link href={n.url} key={n.url}>
          <a className="sidenav-item">
            <li>
              {n.name}
            </li>
          </a>
        </Link>
      )}
    </ul>
    <style jsx>{`
      .sidenav-items {
        margin: 0;
        padding: 0;
      }

      .sidenav-item {
        display: block;
        margin: 0;
        padding: 1rem;
        text-decoration: none;
        transition: background-color .2s ease-in;
        list-style-type: none;
      }

      .sidenav-item:hover {
        background-color: var(--secondary);
      }
    `}</style>
  </div>