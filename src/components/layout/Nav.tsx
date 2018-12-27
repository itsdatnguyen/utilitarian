import * as React from 'react'
import Link from 'next/link'
import { view } from "react-easy-state";

import { HamburgerButton } from "./HamburgerButton";
import { NavStore } from "../../store";

var NavComponent = class extends React.Component {

  constructor(props) {
    super(props)

    this.onHamburgerButtonClicked = this.onHamburgerButtonClicked.bind(this)
  }

  onHamburgerButtonClicked() {
    NavStore.isSidenavOpen = !NavStore.isSidenavOpen
  }

  render() {
    return (
      <nav className="navbar">
        <HamburgerButton isOpen={NavStore.isSidenavOpen} onHamburgerClicked={this.onHamburgerButtonClicked}/>
        <Link href="/">
          <a>
            <h4 className="navbar__brand-logo">
              Utilitarian
            </h4>
          </a>
        </Link>
        <div className="navbar__link-spacer"></div>
        <ul className="navbar__links">
        
        </ul>
        <style jsx>{`  
          --navbar-padding: 1em;
          
          .navbar {
            display: flex;
            background-color: var(--primary);
            width: 100%;
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
          }

          .navbar a {
            text-decoration: none;
          }
          
          .navbar__brand-logo {
            display: flex;
            align-items: center;
            padding: var(--navbar-padding);
            margin: 0;
            color: var(--text-dark-grey);
            text-decoration: none;
            transition: background-color .2s ease-in-out;
          }

          .navbar__link-spacer {
            flex: 1 1 auto;
            transition: background-color .2s ease-in-out;
          }
              
          .navbar__links {
            padding: var(--navbar-padding);
            display: flex;
            transition: background-color .2s ease-in-out;
          }
        
          .navbar--icon {
            width: 24px;
            height: 24px;
            padding: 2px;
            margin: 0px 5px;
            background-size: 100%;
            background-repeat: no-repeat;
            filter: invert(100%);
          }    
          
          .navbar--outline {
            background-color: var(--secondary);
          }
          
          .navbar--fixed {
            position: fixed;
            top: 0;
            left: 0;
          }
        `}</style>
      </nav>
    )
  }
}
  
export const Nav = view(NavComponent)